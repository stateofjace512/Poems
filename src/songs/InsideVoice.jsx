import React from 'react';
import SongPage from '../components/SongPage';

export default function InsideVoice() {
  const lyrics = `I said it's fine, with a smile that cracked
Bit my tongue so hard, it never grew back
Played the cool girl, while I screamed inside
Tucked the rage in my purse with my keys and pride

You said "you're so mature", when I went quiet
But silence ain't strength, it's a diet
You think I'm calm, that's cute, I've just been duct taped mute

This is my inside voice
But I turned it loud
Built a symphony from all I'm not allowed
She's sharp, she's cracked, she's no one's choice
But oh my god, she's got a voice

Inside voice, with nowhere to hide
So I turned her up, and let her drive

I made apologies, for having thoughts, softened every scream until I forgot
Told myself it's just how girls cope
But I'm not your mascot on a microscope

Now I speak in feedback, shriek in key
Don't tell me to smile unless you wanna bleed
You call it grace, I call it fear
You love me more when I disappear

This is my inside voice
Uncaged and fed, she learned to howl from every shut up I've bled
She's raw, she's wrong, she ruins poise,
But she's all mine and she makes noise, inside voice, with venom and heat
I swallowed the storm, now hear her speak

I kept her quiet, because you were scared, but I've been quiet
And you still didn't care

Inside voice like thunder and pearls, too soft for the world, too loud for the girls
She cracked the shell, you kept me in, now she sings and I begin

Inside, voice, not yours to mold, she's not polite, she's uncontrolled
She's fire-teethed, an unapproved choice, but she's mine, she's my inside voice`;

  const credits = (
    <>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Production</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Performed by:</strong> Danica Williams</li>
          <li><strong>Written by:</strong> The Nice Girls</li>
          <li><strong>Produced by:</strong> Jacob Robison</li>
          <li><strong>Mixed by:</strong> MRJK Studios</li>
          <li><strong>Mastered by:</strong> MRJK Studios</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Album Information</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Album:</strong> The Nice Girls (Diamond Edition)</li>
          <li><strong>Label:</strong> Georgia Wixen Records</li>
          <li><strong>Release Date:</strong> July 4, 2025</li>
          <li><strong>Genre:</strong> Pop/Alternative</li>
          <li><strong>Track:</strong> 6 of 10</li>
        </ul>
        <div className="mt-4 pt-4 border-t border-neutral-300">
          <p className="text-neutral-500 text-sm">
            Lyrics © Jacob Robison. Licensed in perpetuity to Jacob Robison (MRJK).<br />
            Recording ℗ MRJK / Jacob Robison.<br />
            © MRJK Records 2025
          </p>
        </div>
      </div>
    </>
  );

  return (
    <SongPage
      title="Inside Voice"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=6"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}