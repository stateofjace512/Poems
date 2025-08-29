import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { FileText, ArrowRight } from "lucide-react";

// helper: group by month-year
function groupByMonth(posts) {
  const grouped = {};
  posts.forEach((post) => {
    const date = new Date(post.date);
    const monthKey = date.toLocaleString("default", { month: "long", year: "numeric" });
    if (!grouped[monthKey]) grouped[monthKey] = [];
    grouped[monthKey].push(post);
  });

  // newest months first
  return Object.fromEntries(
    Object.entries(grouped).sort(
      ([a], [b]) => new Date(grouped[b][0].date) - new Date(grouped[a][0].date)
    )
  );
}

export default function ArticlesBlogsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchTumblrPoems() {
      const apiKey = "zfgzSTPVBDa86jBZtWif8xBqXduItRE4pX3l1tWAtBT8k12qZG"; // replace with your Tumblr API key
      const blog = "https://jrosales19.tumblr.com/";
      const url = `https://api.tumblr.com/v2/blog/${blog}/posts/text?api_key=${apiKey}`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.response?.posts) {
        setPosts(
          data.response.posts.map((p) => ({
            id: p.id,
            title: p.title || p.summary || "Untitled",
            description: p.body?.replace(/<[^>]+>/g, "").slice(0, 120) + "...",
            cover:
              p.trail?.[0]?.blog?.theme?.header_image ||
              "https://placehold.co/600x600?text=Poem",
            alt: p.title || "Tumblr Poem",
            date: p.date,
            link: p.post_url,
          }))
        );
      }
    }

    fetchTumblrPoems();
  }, []);

  const grouped = groupByMonth(posts);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Paper / subtle noise background */}
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

      {/* Navigation */}
      <Navigation />

      {/* Header splash */}
      <div className="w-full mt-[6rem]">
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-b from-white to-neutral-200 shadow-[0_20px_40px_rgba(0,0,0,0.25)]" />
            <div className="relative rounded-lg border border-neutral-300 bg-white">
              <div className="rounded-lg p-8 bg-gradient-to-b from-white to-neutral-50 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-4">
                  Articles & Blogs
                </h1>
                <p className="text-xl text-neutral-600">
                  Browse poems pulled directly from Tumblr!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shelf shadow */}
      <div className="pointer-events-none absolute left-1/2 top-[420px] h-6 w-[90%] -translate-x-1/2 rounded-full bg-neutral-900/10 blur-2xl" />

      {/* Main content */}
      <main className="relative z-10 min-h-screen pt-12 pb-0 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="rounded-2xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/5 p-6 md:p-10">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-8">
              Explore Our Content
            </h2>

            {Object.entries(grouped).map(([month, poems]) => (
              <details
                key={month}
                className="mb-6 border rounded-lg bg-white shadow"
              >
                <summary className="cursor-pointer px-4 py-2 font-semibold">
                  {month}
                </summary>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                  {poems
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((poem) => (
                      <BlogSectionTile key={poem.id} section={poem} />
                    ))}
                </div>
              </details>
            ))}
          </div>

          <footer className="text-center mt-10 px-4 py-6">
            <div className="mx-auto inline-block rounded-xl border border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-200 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)]">
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

function BlogSectionTile({ section }) {
  return (
    <div className="relative">
      <div
        className={`relative rounded-xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-50 shadow-[0_10px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 p-6 hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1 cursor-pointer`}
        onClick={() => (window.location.href = section.link)}
      >
        <div className="rounded-lg p-1 bg-gradient-to-b from-white/80 to-neutral-100/80 relative z-10">
          <div className="aspect-square mb-4 overflow-hidden rounded-md">
            <img
              src={section.cover}
              alt={section.alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <h3 className="text-xl font-bold text-neutral-900 mb-2 flex items-center gap-2">
              {section.title}
              {/* Optionally mark new posts */}
              <span className="gradient-border text-xs font-semibold px-2 py-1 rounded">
                NEW!
              </span>
            </h3>
            <p className="text-sm text-neutral-700 mb-3">
              {section.description}
            </p>

            <div className="flex items-center text-blue-600 text-sm font-medium">
              <FileText className="w-4 h-4 mr-2" />
              Read Poem
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
