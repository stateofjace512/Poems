import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { FileText, ArrowRight, Calendar, ArrowLeft, Heart, Share2 } from "lucide-react";

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

function getCachedData() {
  try {
    const cached = localStorage.getItem("poemCache");
    const timestamp = localStorage.getItem("poemCacheTimestamp");
    if (cached && timestamp && (Date.now() - parseInt(timestamp, 10) < CACHE_DURATION)) {
      return JSON.parse(cached);
    }
  } catch (err) {
    console.error("Error reading cache:", err);
  }
  return null;
}

function setCachedData(data) {
  try {
    localStorage.setItem("poemCache", JSON.stringify(data));
    localStorage.setItem("poemCacheTimestamp", Date.now().toString());
  } catch (err) {
    console.error("Error writing cache:", err);
  }
}

function getCachedRoutes() {
  try {
    const cached = localStorage.getItem("routeCache");
    return cached ? JSON.parse(cached) : [];
  } catch (err) {
    console.error("Error reading route cache:", err);
    return [];
  }
}

function setCachedRoutes(routes) {
  try {
    localStorage.setItem("routeCache", JSON.stringify(routes || []));
  } catch (err) {
    console.error("Error writing route cache:", err);
  }
}


// Helper functions
function groupByMonth(posts) {
  const grouped = {};
  posts.forEach((post) => {
    const date = new Date(post.date);
    const monthKey = date.toLocaleString("default", { month: "long", year: "numeric" });
    if (!grouped[monthKey]) grouped[monthKey] = [];
    grouped[monthKey].push(post);
  });

  return Object.fromEntries(
    Object.entries(grouped).sort(
      ([a], [b]) => new Date(grouped[b][0].date) - new Date(grouped[a][0].date)
    )
  );
}

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/-+/g, '-') // Replace multiple dashes with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
}

// Get current route from URL
function getCurrentRoute() {
  const path = window.location.pathname;
  const match = path.match(/\/poem\/(.+)$/);
  return match ? { type: 'poem', slug: match[1] } : { type: 'list' };
}

// Enhanced content extraction function - FIXED for line breaks and unicode
function extractPoemContent(post) {
  let fullContent = '';
  
  // Try different content fields based on Tumblr API response structure
  if (post.body) {
    // HTML content in body field - preserve line breaks from HTML
    fullContent = post.body
      .replace(/<br\s*\/?>/gi, '\n') // Convert <br> tags to line breaks
      .replace(/<\/p>\s*<p[^>]*>/gi, '\n\n') // Convert paragraph breaks to double line breaks
      .replace(/<p[^>]*>/gi, '') // Remove opening paragraph tags
      .replace(/<\/p>/gi, '\n') // Convert closing paragraph tags to line breaks
      .replace(/<div[^>]*>/gi, '') // Remove div tags
      .replace(/<\/div>/gi, '\n') // Convert closing div to line break
      .replace(/<[^>]+>/g, '') // Remove all other HTML tags
      .trim();
  } else if (post.content && Array.isArray(post.content)) {
    // Content array format
    const textBlocks = post.content
      .filter((c) => c.type === "text")
      .map((c) => {
        // Handle both text and formatted content
        let text = c.text || c.content || '';
        // Preserve line breaks in content array format too
        text = text
          .replace(/<br\s*\/?>/gi, '\n')
          .replace(/<\/p>\s*<p[^>]*>/gi, '\n\n')
          .replace(/<p[^>]*>/gi, '')
          .replace(/<\/p>/gi, '\n')
          .replace(/<div[^>]*>/gi, '')
          .replace(/<\/div>/gi, '\n')
          .replace(/<[^>]+>/g, "");
        return text.trim();
      })
      .filter(text => text.length > 0);
    
    fullContent = textBlocks.join('\n\n');
  } else if (post.text) {
    // Plain text field
    fullContent = post.text.trim();
  } else if (post.summary) {
    // Fallback to summary
    fullContent = post.summary.trim();
  }
  
  // FIXED: Proper Unicode entity decoding while preserving line breaks
  fullContent = fullContent
    .replace(/&nbsp;/g, " ") // Replace non-breaking spaces
    .replace(/&amp;/g, "&") // Replace HTML entities
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'") // Right single quotation mark - PROPER UNICODE
    .replace(/&lsquo;/g, "'") // Left single quotation mark - PROPER UNICODE
    .replace(/&rdquo;/g, "\"") // Right double quotation mark - PROPER UNICODE
    .replace(/&ldquo;/g, "\"") // Left double quotation mark - PROPER UNICODE
    .replace(/&mdash;/g, "—") // Em dash - PROPER UNICODE
    .replace(/&ndash;/g, "–") // En dash - PROPER UNICODE
    .replace(/&hellip;/g, "…") // Ellipsis - PROPER UNICODE
    .replace(/&#8217;/g, "'") // Numeric entity for right single quote
    .replace(/&#8216;/g, "'") // Numeric entity for left single quote  
    .replace(/&#8221;/g, "\"") // Numeric entity for right double quote
    .replace(/&#8220;/g, "\"") // Numeric entity for left double quote
    .replace(/&#8212;/g, "—") // Numeric entity for em dash
    .replace(/&#8211;/g, "–") // Numeric entity for en dash
    .replace(/&#8230;/g, "…") // Numeric entity for ellipsis
    .replace(/\r\n/g, "\n") // Normalize Windows line endings
    .replace(/\r/g, "\n") // Normalize old Mac line endings
    // PRESERVE line breaks - don't collapse them!
    .replace(/\n{3,}/g, "\n\n") // Convert triple+ line breaks to double (but keep doubles!)
    .replace(/^\s+|\s+$/g, ""); // Trim leading/trailing whitespace only

  
  return fullContent;
}

// FIXED: Stricter repost filtering
function isOriginalPost(post) {
  return !post.reblogged_from_id && !post.reblogged_root_id;
}

// Main component with manual routing
export default function ArticlesBlogsPage() {
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute());
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getCurrentRoute());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Fetch poems on mount
  useEffect(() => {
    async function fetchTumblrPoems() {
      try {
        setLoading(true);
        setError(null);
        
        // Try cache first
        const cachedData = getCachedData();
        if (cachedData) {
          console.log('Using cached data:', cachedData.length, 'posts');
          setPosts(cachedData);
          setLoading(false);
          return;
        }

        console.log('Fetching fresh data from Tumblr API...');
        const res = await fetch("/.netlify/functions/tumblr");
        const data = await res.json();

        console.log('Raw Tumblr API response:', data);

        if (data.response?.posts) {
          const processedPosts = data.response.posts
            .filter((p) => {
              // FIXED: Stricter original post filtering
              const isOriginal = isOriginalPost(p);
              if (!isOriginal) {
                console.log('Filtering out reblog:', p.id, p.summary?.slice(0, 50));
              }
              return isOriginal;
            })
            .map((p) => {
              console.log('Processing post:', p.id, 'Type:', p.type);
              
              // Get title with better fallbacks
              let title = p.title || p.summary || "Untitled";
              
              // For quote posts, use the quote text as title if no title exists
              if (!p.title && p.type === 'quote' && p.text) {
                title = p.text.slice(0, 50) + (p.text.length > 50 ? '...' : '');
              }
              
              // FIXED: Extract full content using enhanced function
              let fullContent = extractPoemContent(p);
              
              // Strip title from body if duplicated
              if (fullContent.startsWith(title)) {
                fullContent = fullContent.slice(title.length).trimStart();
              }
              
              console.log('Extracted content for', title, ':', fullContent.slice(0, 100) + '...');

              
              // Create description from content
              const description = fullContent.slice(0, 150) + (fullContent.length > 150 ? "..." : "");

              return {
                id: p.id,
                title: title.trim(),
                slug: createSlug(title),
                description: description || "No preview available",
                fullContent: fullContent || "Content not available",
                date: p.date,
                originalLink: p.post_url,
                type: p.type, // Keep track of post type for debugging
              };
            });

          console.log('Processed posts:', processedPosts);
          setPosts(processedPosts);
          
          // Cache the processed posts
          setCachedData(processedPosts);
          
          // Cache valid routes for 404 prevention
          const validRoutes = processedPosts.map(post => post.slug);
          setCachedRoutes(validRoutes);
        } else {
          console.error('No posts found in response:', data);
          setError('No poems found in the API response');
        }
      } catch (error) {
        console.error('Error fetching poems:', error);
        
        // Try to use stale cache as fallback
        const staleCache = getCachedData();
        if (staleCache) {
          console.log('Using stale cache as fallback');
          setPosts(staleCache);
          setError('Using cached content - data may be outdated');
        } else {
          setError('Failed to load poems. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchTumblrPoems();
  }, []);

  // Navigation functions
  const navigateToPoem = (slug) => {
    const newUrl = `/poem/${slug}`;
    window.history.pushState({}, '', newUrl);
    setCurrentRoute({ type: 'poem', slug });
  };

  const navigateToList = () => {
    window.history.pushState({}, '', '/');
    setCurrentRoute({ type: 'list' });
  };

  // Check if current route is valid when posts are loaded
  useEffect(() => {
    if (currentRoute.type === 'poem' && posts.length > 0) {
      const validSlugs = posts.map(p => p.slug);
      const cachedRoutes = getCachedRoutes();
      
      // If current poem doesn't exist in posts or cache, redirect to list
      if (!validSlugs.includes(currentRoute.slug) && !cachedRoutes.includes(currentRoute.slug)) {
        navigateToList();
      }
    }
  }, [posts, currentRoute]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading poems...</p>
        </div>
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Poems</h1>
          <p className="text-neutral-600 mb-4">{error}</p>
          <button 
            onClick={() => {
              // FIXED: Clear in-memory cache and reload
              localStorage.removeItem("poemCache");
              localStorage.removeItem("poemCacheTimestamp");
              localStorage.removeItem("routeCache");
              window.location.reload();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-2"
          >
            Clear Cache & Refresh
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Render poem detail page
  if (currentRoute.type === 'poem') {
    const poem = posts.find(p => p.slug === currentRoute.slug);
    
    if (!poem) {
      // Check if we have cached routes that might indicate this is a valid poem
      const cachedRoutes = getCachedRoutes();
      if (cachedRoutes.includes(currentRoute.slug)) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-600 mx-auto mb-4"></div>
              <p className="text-neutral-600">Loading poem...</p>
            </div>
          </div>
        );
      }
      
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-neutral-800 mb-4">Poem Not Found</h1>
            <button 
              onClick={navigateToList}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Poetry Corner
            </button>
          </div>
        </div>
      );
    }

    return <PoemDetailPage poem={poem} onBack={navigateToList} />;
  }

  // Render poem list page
  return <PoemListPage posts={posts} onNavigateToPoem={navigateToPoem} error={error} />;
}

// Poem list page component
function PoemListPage({ posts, onNavigateToPoem, error }) {
  const grouped = groupByMonth(posts);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful paper background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 20% -10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(1000px 700px at 110% 10%, rgba(0,0,0,0.05), transparent 55%), linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)",
        }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.015" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <Navigation />

      {/* Header */}
      <div className="w-full mt-[6rem]">
        <div className="relative mx-auto max-w-4xl px-4">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-b from-white to-neutral-200 shadow-[0_20px_40px_rgba(0,0,0,0.25)]" />
            <div className="relative rounded-lg border border-neutral-300 bg-white">
              <div className="rounded-lg p-8 bg-gradient-to-b from-white to-neutral-50 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-4">
                  Poetry Corner
                </h1>
                <p className="text-xl text-neutral-600 italic">
                  Words from the heart, pulled fresh from Tumblr
                </p>
                {error && (
                  <p className="text-sm text-amber-600 mt-2">
                    ⚠ Using cached content - some poems may be outdated
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[420px] h-6 w-[90%] -translate-x-1/2 rounded-full bg-neutral-900/10 blur-2xl" />

      <main className="relative z-10 min-h-screen pt-12 pb-0 px-4">
        <div className="w-full max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-neutral-600 mb-2">No Poems Yet</h2>
              <p className="text-neutral-500">Check back soon for new poetry!</p>
            </div>
          ) : (
            Object.entries(grouped).map(([month, poems]) => (
              <div key={month} className="mb-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex-grow h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
                  <div className="mx-6 rounded-full border border-neutral-300 bg-gradient-to-b from-white to-neutral-100 shadow-[0_4px_12px_rgba(0,0,0,0.1)] ring-1 ring-black/5 px-6 py-2">
                    <div className="flex items-center gap-2 text-neutral-700">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold text-lg">{month}</span>
                    </div>
                  </div>
                  <div className="flex-grow h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
                </div>
                
                <div className="space-y-6">
                  {poems
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((poem, index) => (
                      <PoemCard 
                        key={poem.id} 
                        poem={poem} 
                        isEven={index % 2 === 0} 
                        onClick={() => onNavigateToPoem(poem.slug)}
                      />
                    ))}
                </div>
              </div>
            ))
          )}

          <footer className="text-center mt-16 px-4 py-6">
            <div className="mx-auto inline-block rounded-xl border border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-200 px-6 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)]">
              <p className="text-xs text-neutral-700">
                © MRJK Records, a division of Jake Robison Records. © Georgia
                Wixen Records, a division of Jake Robison Records. The Nice
                Girls™ name, photos, and music are the property of Jake Robison
                Records.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

// Individual poem detail page component - FIXED line break preservation
function PoemDetailPage({ poem, onBack }) {
  const formattedDate = new Date(poem.date).toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: poem.title,
          text: `Check out this poem: "${poem.title}"`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.log('Could not copy to clipboard:', err);
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Same beautiful background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 20% -10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(1000px 700px at 110% 10%, rgba(0,0,0,0.05), transparent 55%), linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)",
        }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
      >
        <filter id="poemNoiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.015" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#poemNoiseFilter)" />
      </svg>

      <Navigation />

      <main className="relative z-10 pt-[8rem] pb-12 px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Back button */}
          <button
            onClick={onBack}
            className="mb-8 flex items-center text-neutral-600 hover:text-neutral-800 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Poetry Corner
          </button>

          {/* Debug info (remove in production) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg text-sm">
              <p><strong>Debug Info:</strong></p>
              <p>Post Type: {poem.type}</p>
              <p>Content Length: {poem.fullContent.length}</p>
              <p>Has Title: {poem.title ? 'Yes' : 'No'}</p>
              <p>Line breaks in content: {poem.fullContent.split('\n').length - 1}</p>
            </div>
          )}

          {/* Poem container */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-white to-neutral-200 shadow-[0_25px_50px_rgba(0,0,0,0.25)]" />
            <div className="relative rounded-xl border border-neutral-300 bg-white overflow-hidden">
              <div className="bg-gradient-to-b from-white to-neutral-50 p-8 md:p-12">
                
                {/* Poem header */}
                <div className="text-center mb-10 pb-8 border-b border-neutral-200">
                  <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
                    {poem.title}
                  </h1>
                  <p className="text-neutral-600 italic">
                    Written on {formattedDate}
                  </p>
                </div>

                {/* FIXED: Poem content with preserved line breaks */}
                <div className="prose prose-lg max-w-none text-neutral-800 leading-relaxed">
                  {poem.fullContent === 'Content not available' ? (
                    <div className="text-center text-neutral-500 italic py-8">
                      <p>This poem's content could not be loaded.</p>
                      <a
                        href={poem.originalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        View on Tumblr instead →
                      </a>
                    </div>
                  ) : (
                    <div className="text-lg leading-8 whitespace-pre-wrap font-serif">
                      {poem.fullContent}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-8 mt-8 border-t border-neutral-200">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-medium">Like</span>
                    </button>
                    <button 
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                  
                  <a
                    href={poem.originalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
                  >
                    View on Tumblr →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Updated poem card component
function PoemCard({ poem, isEven, onClick }) {
  const postDate = new Date(poem.date);
  const formattedDate = postDate.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });
  
  const now = new Date();
  const isNew = postDate.getMonth() === now.getMonth() && postDate.getFullYear() === now.getFullYear();

  return (
    <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
      <div className="w-full max-w-2xl">
        <div
          className="relative rounded-2xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-50 shadow-[0_10px_20px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.18)] hover:-translate-y-1 cursor-pointer group"
          onClick={onClick}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-60 mix-blend-soft-light"></div>
          
          <div className="relative p-8">
            {isNew && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                NEW!
              </div>
            )}
            
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 leading-tight">
              {poem.title}
            </h3>
            
            <div className="text-neutral-700 mb-6 leading-relaxed text-lg">
              <p className="italic">"{poem.description}"</p>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
              <span className="text-sm text-neutral-500 font-medium">
                {formattedDate}
              </span>
              
              <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700 transition-colors">
                <FileText className="w-4 h-4 mr-2" />
                Read Full Poem
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
