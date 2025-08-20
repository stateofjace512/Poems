import React from 'react';
import SongPage from '../components/SongPage';

export default function AskMama() {
  const lyrics = `I said I wouldn't call him
I said I knew the cost
But now I'm wearin' perfume
That smells a little lost

I typed out "you up?" and paused
Heart racin', red alert
I said I'd never go back
But I've done dumber things in skirts

I could blame the wine
Or this old T-shirt
But if I press send
Someone's gonna get hurt

So I'll ask Mama
She'll talk me down
Say, "Baby, if it's love, you don't need to chase it 'round"
She'll say "You called me last time with the same regret"
So I'll ask Mama
Just not yet

He said he's changed, of course he did
They always do when you forget
I got his number in a folder
Marked "We Don't Text"

But I miss the sound he made
When he said my name half wrong
Like he never fully got me
But I still played along

Mama said, "The nice ones'll kill you quicker"
But silence hurts too
And I'm a slow forgiver

So I'll ask Mama
If I should reply
Maybe she'll remind me of the last goodbye
She'll say, "Did he say sorry or did you just forget?"
So I'll ask Mama
Just not yet

Mama said,
"If you gotta ask me,
then you already know"
And she was right
But knowing ain't the same
As not wanting to go

So I asked Mama
She didn't say much
Just looked at me with eyes that had enough
She said, "I won't stop you But I won't pretend"
"If you go back, baby, don't call me again"

So I hung up the phone
Put down the threat
And whispered to the ceiling,
"Not yet"

I'll ask mama, when I'm ready
To hear what I already know`;

  const credits = (
    <>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Production</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Performed by:</strong> Jasmine Erica, Georgia Wixen & Danica Williams</li>
          <li><strong>Written by:</strong> Jacob Robison</li>
          <li><strong>Produced by:</strong> Jacob Robison</li>
          <li><strong>Mixed by:</strong> Jacob Robison</li>
          <li><strong>Mastered by:</strong> Jacob Robison</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Album Information</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Album:</strong> The Nice Girls (Diamond Edition)</li>
          <li><strong>Label:</strong> MRJK Records</li>
          <li><strong>Release Date:</strong> July 4, 2025</li>
          <li><strong>Genre:</strong> Country</li>
          <li><strong>Track:</strong> 2 of 10</li>
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
      title="I'll Ask Mama"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=2"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}
