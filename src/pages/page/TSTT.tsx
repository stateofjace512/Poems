import React, { useState, useEffect } from 'react';
import Navigation from "../../components/Navigation.jsx";

export default function ArticlesBlogsPage() {
  const [currentArticle, setCurrentArticle] = useState(0);
 
  const articles = [
    {
      title: "Prelude",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_prelude_tstt.mp3",
      content: `Text`
    },
    {
      title: "Track 1",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_track1_tstt.mp3",
      content: `Text`
    },
    {
      title: "Track 2",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_track2_tstt.mp3",
      content: `Text`
    },
    {
      title: "Track 3",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_track3_tstt.mp3",
      content: `Text`
    },
    {
      title: "Track 4",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_track4_tstt.mp3",
      content: `Text`
    },
    {
      title: "Track 5",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_track5_tstt.mp3",
      content: `Text`
    },
    {
      title: "Outro",
      date: "9/19/2025",
      audio_file: "/georgia_wixen_outro_tstt.mp3",
      content: `Text`
    }
  ];

  const handlePrevious = () => {
    if (currentArticle > 0) {
      setCurrentArticle(currentArticle - 1);
    }
  };

  const handleNext = () => {
    if (currentArticle < articles.length - 1) {
      setCurrentArticle(currentArticle + 1);
    }
  };

  const handleSelectChange = (e) => {
    setCurrentArticle(parseInt(e.target.value));
  };

  const currentArticleData = articles[currentArticle];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Paper / subtle noise background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "radial-gradient(1200px 800px at 20% -10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(1000px 700px at 110% 10%, rgba(0,0,0,0.05), transparent 55%), linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)"
        }}
      />
      <svg
        aria-hidden="true"
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

      {/* Main content */}
      <main className="relative z-10 min-h-screen pt-32 pb-0 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="rounded-2xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/5 p-6 md:p-10">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-4">
                Track-by-Track Notes
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-6">
                The Sweet Tea Tragedies
              </p>
              
              {/* Article Selector */}
              <div className="max-w-md mx-auto">
                <select
                  value={currentArticle + 1}   // show 1-based in dropdown
                  onChange={(e) => setCurrentArticle(parseInt(e.target.value) - 1)} // map back to 0-based
                  className="w-full rounded-md border border-neutral-300 bg-gradient-to-b from-white to-neutral-200 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_6px_rgba(0,0,0,0.12)] px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                >
                  <option value="1">Prelude</option>
                  <option value="2">Track 1</option>
                  <option value="3">Track 2</option>
                  <option value="4">Track 3</option>
                  <option value="5">Track 4</option>
                  <option value="6">Track 5</option>
                  <option value="7">Outro</option>
                </select>
              </div>
            </div>

            {/* Article Content */}
            <div className="mb-8">
              <div className="rounded-xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-50 shadow-[0_10px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
                    {currentArticleData.title}
                  </h2>
                  <p className="text-sm text-neutral-600">{currentArticleData.date}</p>
                </div>

                {/* Audio Player at the top */}
                {currentArticleData.audio_file && (
                  <div className="mb-6">
                    <audio
                      controls
                      className="w-full"
                      src={currentArticleData.audio_file}
                    >
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
                
                <div 
                  className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: currentArticleData.content }}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentArticle === 0}
                className={`inline-flex items-center justify-center rounded-md border border-neutral-300 bg-gradient-to-b from-white to-neutral-200 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_6px_rgba(0,0,0,0.12)] active:shadow-inner active:translate-y-px focus:outline-none focus:ring-2 focus:ring-blue-500/60 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 px-4 py-2 text-sm font-semibold ${currentArticle === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span>← Previous</span>
              </button>
              
              <span className="text-sm text-neutral-600">
                Article {currentArticle + 1} of {articles.length}
              </span>
              
              <button
                onClick={handleNext}
                disabled={currentArticle === articles.length - 1}
                className={`inline-flex items-center justify-center rounded-md border border-neutral-300 bg-gradient-to-b from-white to-neutral-200 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_6px_rgba(0,0,0,0.12)] active:shadow-inner active:translate-y-px focus:outline-none focus:ring-2 focus:ring-blue-500/60 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 px-4 py-2 text-sm font-semibold ${currentArticle === articles.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span>Next →</span>
              </button>
            </div>
          </div>

          <footer className="text-center mt-10 px-4 py-6">
            <div className="mx-auto inline-block rounded-xl border border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-200 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)]">
              <p className="text-xs text-neutral-700">
                © MRJK Records, a division of Jake Robison Records. © Georgia Wixen Records, a division of Jake Robison Records.
              </p>
            </div>
          </footer>
        </div>  
      </main>
    </div>
  );
}
