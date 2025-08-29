import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { FileText, ArrowRight, Calendar, ArrowLeft, Heart, Share2 } from "lucide-react";

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
    .trim('-'); // Remove leading/trailing dashes
}

// Get current route from URL
function getCurrentRoute() {
  const path = window.location.pathname;
  const match = path.match(/\/page\/(.+)$/);
  return match ? { type: 'poem', slug: match[1] } : { type: 'list' };
}

// Main component with manual routing
export default function ArticlesBlogsPage() {
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute());
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        const res = await fetch("/.netlify/functions/tumblr");
        const data = await res.json();

        if (data.response?.posts) {
          const processedPosts = data.response.posts.map((p) => {
            const title = p.title || p.summary || "Untitled";
            
            // Get full content for the poem
            const textBlocks = (p.content || [])
              .filter((c) => c.type === "text")
              .map((c) => c.text.replace(/<[^>]+>/g, "").trim());

            const firstNonTitleText =
              textBlocks.find((t) => t && t !== title) || p.summary || "";

            const fullContent = textBlocks.join('\n\n');

            return {
              id: p.id,
              title,
              slug: createSlug(title),
              description: firstNonTitleText.slice(0, 150) + (firstNonTitleText.length > 150 ? "..." : ""),
              fullContent,
              date: p.date,
              originalLink: p.post_url,
            };
          });

          setPosts(processedPosts);
        }
      } catch (error) {
        console.error('Error fetching poems:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTumblrPoems();
  }, []);

  // Navigation functions
  const navigateToPoem = (slug) => {
    const newUrl = `/page/${slug}`;
    window.history.pushState({}, '', newUrl);
    setCurrentRoute({ type: 'poem', slug });
  };

  const navigateToList = () => {
    window.history.pushState({}, '', '/');
    setCurrentRoute({ type: 'list' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading poems...</p>
        </div>
      </div>
    );
  }

  // Render poem detail page
  if (currentRoute.type === 'poem') {
    const poem = posts.find(p => p.slug === currentRoute.slug);
    
    if (!poem) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-neutral-800 mb-4">Poem Not Found</h1>
            <button 
              onClick={navigateToList}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Poetry Corner
            </button>
          </div>
        </div>
      );
    }

    return <PoemDetailPage poem={poem} onBack={navigateToList} />;
  }

  // Render poem list page
  return <PoemListPage posts={posts} onNavigateToPoem={navigateToPoem} />;
}

// Poem list page component
function PoemListPage({ posts, onNavigateToPoem }) {
  const grouped = groupByMonth(posts);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Your beautiful paper background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 20% -10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(1000px 700px at 110% 10%, rgba(0,0,0,0.05), transparent 55%), linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)",
        }}
      />
      <svg
        aria-hidden
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[420px] h-6 w-[90%] -translate-x-1/2 rounded-full bg-neutral-900/10 blur-2xl" />

      <main className="relative z-10 min-h-screen pt-12 pb-0 px-4">
        <div className="w-full max-w-4xl mx-auto">
          {Object.entries(grouped).map(([month, poems]) => (
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
          ))}

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

// Individual poem detail page component
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
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Same beautiful background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 20% -10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(1000px 700px at 110% 10%, rgba(0,0,0,0.05), transparent 55%), linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)",
        }}
      />
      <svg
        aria-hidden
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

                {/* Poem content */}
                <div className="prose prose-lg max-w-none text-neutral-800 leading-relaxed">
                  {poem.fullContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-lg leading-8">
                      {paragraph}
                    </p>
                  ))}
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
