import React from 'react';
import Navigation from '../components/Navigation';
import { FileText, ArrowRight } from 'lucide-react';

export default function ArticlesBlogsPage() {
  const blogSections = [
    {
      title: 'The Sweet Tea Tragedies',
      isNew: true,
      description: 'Articles and insights about Georgia Wixen\'s upcoming album',
      path: '/page/tstt/',
      cover: 'https://i.postimg.cc/XnzbZ5kp/TSSTCDFRONTEDIT.jpg',
      alt: 'The Sweet Tea Tragedies cover',
      comingSoon: false
    },
    {
      title: 'The Nice Girls',
      isNew: false,
      description: 'Behind-the-scenes stories and articles about The Nice Girls',
      path: '/page/tng/',
      cover: 'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg',
      alt: 'The Nice Girls Diamond Edition cover',
      comingSoon: false
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Paper / subtle noise background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 20% -10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(1000px 700px at 110% 10%, rgba(0,0,0,0.05), transparent 55%), linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)',
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
      >
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
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
                  Browse blogs and articles pertaining to our music!
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogSections.map((section, index) => (
                <BlogSectionTile key={index} section={section} />
              ))}
            </div>
          </div>

          <footer className="text-center mt-10 px-4 py-6">
            <div className="mx-auto inline-block rounded-xl border border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-200 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)]">
              <p className="text-xs text-neutral-700">
                © MRJK Records, a division of Jake Robison Records. © Georgia Wixen Records, a division of Jake Robison Records.
                The Nice Girls™ name, photos, and music are the property of Jake Robison Records.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function BlogSectionTile({ section }) {
  const handleClick = () => {
    if (!section.comingSoon) {
      window.location.href = section.path;
    }
  };

  return (
    <div className="relative">
      <div className={`relative rounded-xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-50 shadow-[0_10px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 p-6 ${!section.comingSoon ? 'hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1 cursor-pointer' : 'opacity-75'}`} 
           onClick={handleClick}>
        
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
              {section.isNew && (
                <span className="gradient-border text-xs font-semibold px-2 py-1 rounded">
                  NEW!
                </span>
              )}
            </h3>
            <p className="text-sm text-neutral-700 mb-3">
              {section.description}
            </p>
            
            {section.comingSoon ? (
              <div className="flex items-center justify-center py-2 text-sm text-neutral-500 italic">
                <FileText className="w-4 h-4 mr-2" />
                Coming Soon
              </div>
            ) : (
              <div className="flex items-center text-blue-600 text-sm font-medium">
                <FileText className="w-4 h-4 mr-2" />
                Browse Articles
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
