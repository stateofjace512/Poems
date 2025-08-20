import React from 'react';
import SongPage from '../components/SongPage';

export default function MissedMeOut() {
  const lyrics = `You took too long to notice
Now I'm already gone
I left a heel in your bedsheets
And a curse in every song

You thought I'd sit here waiting
Like your backup plan on mute
But I rerouted all my anger
And now it's looking cute

Your boys still watch my stories
Bet you hate that they still care
You miss the girl who loved you
But she's not even there

Missed me missed out
Should've locked it down
Now I'm out here turning heads
While you're just running your mouth
You had the crown
But you dropped it somehow
Too bad so sad
Missed me missed out

I'm champagne in the moonlight
You're a typo I ignored
You called me selfish for escaping
But baby I got bored

You played king in a kingdom
Built of matches and regrets
Now I'm sleeping like an angel
While you chain-smoke your regrets

Your friends still try to DM
Guess they miss the view
Tell them I don't do reruns
And neither should you

Missed me missed out
Should've locked it down
Now I'm out here turning heads
While you're just running your mouth
You had the crown
But you dropped it somehow
Too bad so sad
Missed me missed out

You can cry to your mirror
Swipe through your old mistakes
But darling this is closure
And I don't do retakes

Missed me missed out
Go ahead scream and shout
While I toast to freedom
You drown in self-doubt
You had a shot
But I'm what you live without
So keep my name
Out of your mouth
You missed me missed out`;

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
          <li><strong>Genre:</strong> Pop</li>
          <li><strong>Track:</strong> 8 of 10</li>
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
      title="Missed Me, Missed Out"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=8"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}
