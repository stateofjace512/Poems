import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation.jsx';

export default function ArticlesBlogsPage() {
  const [currentArticle, setCurrentArticle] = useState(0);

  const articles = [
    {
      title: "Building an Album Over State and Country Lines",
      date: "8/20/2025",
      content: `PRELUDE<br><br>For those who don't know, we're all over the place. Jasmine's in Dallas. Georgia's in Murfreesboro, Tennessee. Danica's in Wismar, Germany. And I'm here in Austin, Texas. That's four artists, three states, two countries, three languages, and one album.<br><br>Most people wouldn't call that a practical setup, but honestly, it's what makes this project so alive. Danica switches between German and English, Jasmine flows between Spanish and English, and we all bring our own tones, rhythms, and cultural quirks into the writing. What could've been chaos turned into chemistry - different sounds, different languages, and somehow, a shared voice.<br><br>Of course, it isn't easy. We record separately, which means juggling time zones, file transfers, mismatched microphones, and the occasional "Can you hear me now?" Zoom disaster. There are weeks where it feels less like a band and more like a long-distance relationship, trying to keep sparks alive across oceans. But when the tracks finally come together - when Danica's German edge slices against Jasmine's Spanish warmth, layered with Georgia's Southern grit and my own mess of Austin energy - the distance melts away.<br><br>The beauty of this record is that it doesn't sound like it came from one room. It sounds like it came from everywhere. A little Texan dust, a little Tennessee steel, a little European neon, all blended into something none of us could have made alone.<br><br>That's the truth about building an album this way: it's difficult, but the difficulty is the music. Every time-zone glitch and cultural clash becomes part of the texture. And honestly? We wouldn't have it any other way.`
    },
    {
      title: "I Can't Find My Identity. Have YOU seen my identity?",
      date: "8/20/2025",
      content: `My name's Jake. I'm also MRJK. Our first song, "Oh, There It Is," started with a stupid joke in an Instagram chat with a couple of friends: Georgia, Danica, and Jasmine. We were all being idiots, messing around with the idea of a band full of "stupid blonde girls" making music no one would ever listen to.<br><br>Then Danica drops this: "oMG what if we wrote a song about losing a purse and how it feels like losing your whole identity? I lost my purse earlier dude and it felt like someone stole my social security number. I was so lost. couldn't even buy starbucks."<br><br>That was the spark. We were making an album about stupid girl things. But as we actually started writing, those "stupid girl things" faded out. What came out instead was this raw, revealing epilogue to our own lives, tucked away inside the humor. The satire just... morphed into honesty.`
    },
    {
      title: "I Don't Ask Anyone But Her",
      date: "8/20/2025",
      content: `Some songs don't come from late-night laughs. They come from those lessons you've heard so many times you start hearing them in your own head. For me, that voice is always my mom's.<br><br>I wrote "I'll Ask Mama" as a confession - not to her, but about her. She's the one I call when I'm stuck between knowing better and wanting worse. That voice cuts through when I'm being the idiot we were all talking about earlier, reminding me that love isn't something you chase around at two in the morning.<br><br>The song isn't about a guy. It's about the pull between temptation and truth, about those messy moments when your heart wants to make the same mistake twice. And it's about the person on the other end of the line who already knows the ending, but lets you work it out anyway.<br><br>My mother's advice has never been dressed up or softened. She just says, "If you have to ask, you already know the answer." That kind of honesty isn't always easy to hear, but it's the kind that keeps you from slipping too far down the same road. Writing "I'll Ask Mama" was my way of holding onto that voice when I don't want to hear it - when my hands are shaking over a text I shouldn't send, when I mistake silence for comfort, or when memory tries to rewrite the truth. It's a reminder that the wisest thing you can do is pause, pick up the phone, and let someone who loves you talk you down.<br><br>Because Mama's always right. And sometimes, the hardest part of growing up is finally admitting it.`
    },
    {
      title: "No Refunds, No Regrets",
      date: "8/20/2025",
      content: `Every album has one, the filler track. The song you toss in because the record needs balance, or the verse came out cleaner than you expected. For us, that was "Return Policy."<br><br>It started as a throwaway metaphor: a breakup written like a Target receipt. "What's your return policy on heartbreak?" was supposed to be ridiculous, not profound. Turns out, half the world has stood at a counter, clutching a box, praying someone would take back a bad decision. Heartbreak sounds a lot like customer service.<br><br>Fans latched onto it in a way I never saw coming. Suddenly, the filler was the anthem, and the joke was on me. Honestly? I get it. Who doesn't wish they could just walk up, hand over a doomed relationship, and say, "Hi, I kept the tags on. Can I get a refund?"<br><br>What I thought was lighthearted satire became sharp truth: love doesn't come with a return window, and the fine print always shows up too late. Maybe that's why this song hit. Sometimes you don't need poetry, you just need a brutally funny metaphor to make sense of the mess.<br><br>So yeah, "Return Policy" was a filler track. Until it wasn't.`
    },
    {
      title: "Sharin' Location, Sharin' Way Too Much",
      date: "8/20/2025",
      content: `Some songs are written with intent: big choruses, big feelings. Others sneak in through the back door. "Sharin' Location" was the latter. I didn't expect it to stick. Honestly, I thought it was too specific, too rooted in a digital quirk to resonate. Turns out, it was too relatable.<br><br>Who hasn't done it? Watched that little glowing dot drift across a city you've never been to, feeling sick and tethered all at once. Knowing someone's cross streets but not their state of mind. Being closer to their GPS than their heart.<br><br>It started as a joke about Apple Maps heartbreak, but it landed because everyone's lived it. We're all guilty of keeping someone's location on long past the relationship's expiration date, like an invisible leash we're too scared to cut. Turning it off would mean admitting we've moved on. Leaving it on means we haven't.<br><br>When we wrote "I could turn it off, but that would mean I've healed" on FaceTime, I thought it was a throwaway line. But, as per my motto, stupid is successful. The filler became confession, and the confession became communal. "Sharin' Location" blew up because it wasn't just about me. It was about every midnight refresh, every little green dot we pretend doesn't matter, and every lie we tell ourselves when we say, "I'm over it."<br><br>So yeah, maybe heartbreak doesn't come with navigation. But apparently, it does come with a migraine and 16 Excedrin.`
    },
    {
      title: "I Sat With That: When Silence Speaks Louder",
      date: "8/20/2025",
      content: `Not every song on this record was born out of banter or jokes. Some came from places so heavy, they change the air in the room. "I Sat With That" was Danica's song, and it's one of those.<br><br>She wrote it after a loss most people can't imagine, one no one should have to endure. Her mother's life was taken by violence, and while the world would expect rage or spectacle, Danica chose the opposite. She wrote about the strength of sitting in stillness, about reclaiming silence as power.<br><br>The song is gentle in its words, but she was resisting exploding. There's no scream, no revenge fantasy, no need for proof or applause. Just the devastating line that became its core: "I sat with that, and I never looked back."<br><br>When we recorded it, the air felt different. The microphone picked up not just her voice, but the restraint. The choice not to collapse. The dignity in refusing to let pain demand a performance. Fans heard it, and they felt it. The response wasn't loud, but it touched people.<br><br>"I Sat With That" isn't just Danica's story. It's the reminder that sometimes the most radical act isn't what you say or do, but what you refuse to give away.`
    },
    {
      title: "Inside Voice: When Silence Breaks",
      date: "8/20/2025",
      content: `Most of our songs walk the line between satire and sincerity, but "Inside Voice" doesn't just walk the line, it shatters it. Georgia wrote it with me in the aftermath of something violent, life-shattering, and irreversible. It was one of those moments where holding back would've been a betrayal, not just to her, but to the truth.<br><br>The song doesn't pretend to be polite. It doesn't perform palatable resilience. It rips the duct tape off the mouth and asks what happens when silence - the one women are told to keep for safety, for dignity, for "maturity" - finally turns into sound.<br><br>That's why the hook hits like lightning: "This is my inside voice, but I turned it loud. Built a symphony from all I'm not allowed." It's not just clever wordplay, it's a rebellion against every time she was told to smile, to swallow, to cope quietly.<br><br>When we wrote it, the room felt like it was shaking. It wasn't about catharsis. It was about evidence. It was about showing that even if a body is forced into silence, the voice survives - and when it finally comes out, it doesn't whisper. It howls.<br><br>"Inside Voice" became the song people didn't expect but couldn't forget. On stage, it doesn't get sung - it gets exorcised. And when fans shout it back, they're not just singing Georgia's story. They're screaming for themselves, too. Sometimes music isn't therapy, or entertainment, or metaphor. Sometimes it's survival. And that's what "Inside Voice" is.`
    },
    {
      title: "The Accidental Lesbian Anthem",
      date: "8/20/2025",
      content: `Every album needs a party track: the kind of song you write half-joking, thinking it'll fill space between the heavier stuff. For us, that was "GIRLSGIRLSGIRLS." Jasmine tossed it off like a glitter bomb: shiny, cheeky, and unapologetically gay. We figured it'd get a smile, maybe a few head bobs. We didn't expect it to explode into the chaos anthem it's become.<br><br>The formula was simple: lip gloss, prom dress drama, neon lights, and the universal truth that "boys are fine but girls change lives." It wasn't meant to be revolutionary. But somewhere between the cherry-red lip gloss and the sleepover-turned-something-else, the song became more than filler. It became representation people were hungry for - a glossy, pop-bright way to scream, "Yeah, I like girls. And it's fun as hell."<br><br>Fans turned it into exactly what the title promised: not one girl, not two, but all caps GIRLSGIRLSGIRLS. They belt it in crowds, they put it on their pride playlists, they treat it like the confetti cannon of the record. And maybe that's why it blew up - because it wasn't weighed down with angst or overthinking. It was simple. Joyful. Loud.<br><br>So yeah, "GIRLSGIRLSGIRLS" was a filler track. But sometimes filler becomes fuel. Sometimes a song written as a joke turns into a rallying cry. And sometimes, three little words and a chorus full of glitter can do more than a manifesto ever could.`
    },
    {
      title: "The Pettiest Closure Song We Ever Wrote",
      date: "8/20/2025",
      content: `Some songs are born out of heartbreak. Others out of late-night overthinking. "Missed Me, Missed Out" was born out of a single savage comment.<br><br>Jasmine was juggling about eight women (her words, not mine), and Danica - never one to sugarcoat - looked at her and said, "You are such a slut. You're gonna miss a lot of love. Oh well… missed you, missed out." I didn't even wait for the room to breathe. I just shouted back: "That's a song."<br><br>And it was.<br><br>What came out was a kiss-off anthem in stilettos. It's equal parts petty and liberating - a champagne toast to moving on while your ex still drowns in self-doubt. Lines like "I left a heel in your bedsheets and a curse in every song" weren't written to wound, they were written to strut. To be loud, cocky, unapologetic.<br><br>Fans picked it up instantly. It's the one people scream at the top of their lungs, pointing at imaginary exes in the crowd. It's glittery closure, the kind that doesn't whisper "I'm healing" but shouts "Too bad, so sad!"<br><br>"Missed Me, Missed Out" wasn't meant to be therapy. It was meant to be fun. But maybe that's why it works - because sometimes the best closure isn't soft reflection. Sometimes it's a perfectly timed mic drop.`
    },
    {
      title: "You Can't Top This (And Yes, We Knew What We Were Doing)",
      date: "8/20/2025",
      content: `Sometimes you write a breakup song. Sometimes you write a ballad. And sometimes your bandmates start a "naughty digital relationship," and you walk away with this.<br><br>"You Can't Top This" was born half out of jealousy, half out of comedy, and fully out of sexual innuendo. Danica and Jasmine were swapping lines back and forth - playful, taunting, and just the right amount of dirty - and it clicked into place: this wasn't just a song, this was a dare.<br><br>The chorus isn't subtle. It wasn't meant to be. When you chant "top this" on stage, the audience knows exactly what you mean. It's not just about being unforgettable in bed - though, let's be real, it's definitely about that - it's about being irreplaceable. The ex might find a lookalike, but she'll never be the real thing.<br><br>What started as an inside joke turned into one of the loudest, cockiest tracks on the record. Fans turned it into a chant, a battle cry, a sweaty basement-floor scream. And that's the point - it's not dignified, it's not restrained, it's messy and proud and a little bit horny.<br><br>Every album needs a song that just leans in and winks at you. "You Can't Top This" is ours. And honestly? They can't.`
    },
    {
      title: "Girl Go Down",
      date: "8/20/2025",
      content: `Not every song comes from divine inspiration. Some come from Jasmine... well, let's just say "not being subtle." The phrase "go down on me" sparked a spiral that turned into one of our most dramatic tracks: "Girl Down."<br><br>What started as a throwaway sexual quip became something completely different in the writing room. The phrase flipped from innuendo to metaphor, and suddenly we weren't laughing anymore - we were staging a full-scale disaster scene. Sirens, chalk outlines, mascara crime scenes. The heartbreak wasn't just sad; it was catastrophic, loud, and televised.<br><br>The result is a song that sounds like an ambulance crashing into a pop record. It's messy, theatrical, and over the top - but that's why it stuck. Fans belt "It's a heartbreak, we got a girl down" like they're both the victim and the first responder. It's camp tragedy, the kind that hurts and entertains at the same time.<br><br>And maybe that's the genius of it. "Girl Down" could have stayed a dirty inside joke. Instead, it became one of those tracks where people laugh at the origin story but cry at the chorus. Proof that sometimes the most unserious beginnings lead to the most unforgettable songs.`
    },
    {
      title: "AFTERWORD",
      date: "8/20/2025",
      content: `This album started as a joke, then turned into survival, then turned into something bigger than us. It's not polished, it's not perfect, but it's honest. Distance, filler tracks, chaos, grief, laughter. It's all stitched together here. And if it sounds messy, that's because it is. But that's the point.<br><br>Thanks for sitting with us.`
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
                The Nice Girls (Diamond Edition)
              </p>
              
              {/* Article Selector */}
              <div className="max-w-md mx-auto">
                <select
                  value={currentArticle}
                  onChange={handleSelectChange}
                  className="w-full rounded-md border border-neutral-300 bg-gradient-to-b from-white to-neutral-200 text-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_6px_rgba(0,0,0,0.12)] px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                >
                  <option value="0">Article 0: Building an Album Over State and Country Lines</option>
                  <option value="1">Article 1: I Can't Find My Identity. Have YOU seen my identity?</option>
                  <option value="2">Article 2: I Don't Ask Anyone But Her</option>
                  <option value="3">Article 3: No Refunds, No Regrets</option>
                  <option value="4">Article 4: Sharin' Location, Sharin' Way Too Much</option>
                  <option value="5">Article 5: I Sat With That: When Silence Speaks Louder</option>
                  <option value="6">Article 6: Inside Voice: When Silence Breaks</option>
                  <option value="7">Article 7: The Accidental Lesbian Anthem</option>
                  <option value="8">Article 8: The Pettiest Closure Song We Ever Wrote</option>
                  <option value="9">Article 9: You Can't Top This (And Yes, We Knew What We Were Doing)</option>
                  <option value="10">Article 10: Girl Go Down</option>
                  <option value="11">Article 11: AFTERWORD</option>
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
                Article {currentArticle} of 11
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
                The Nice Girls™ name, photos, and music are the property of Jake Robison Records.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
