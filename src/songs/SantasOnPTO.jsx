import React from 'react';
import SongPage from '../components/SongPage';

export default function SantasOnPTO() {
  const lyrics = `Out of office, red suit's dry cleaned
He left the elves on read and dipped the scene
Said "I'm tired of letters, give me sand"
Now he's barefoot with a drink in hand

Mrs. Claus said "he's been tense"
Now he's shirtless on a beach in France
Reindeer gone, no sleigh in sight
Santa took a jet and missed his flight

Santa's on PTO
He's not checkin' twice, he's letting it go
No chimney dives, no ho-ho-ho
He said "baby, I'm burnt out, let it snow"
Nah, he's sippin' eggnog on a boat
Sleigh parked, no coat Let the North Pole know
Santa's on PTO

He unfollowed the naughty list
Said "I've been working through December pissed"
Now he's got SPF on his belly
Watching Die Hard in a beach house in Maui

Candy canes in a coconut cup
Rudolph's out here turnin' up
Christmas in July's the mood
Santa said, "catch me in swim trunks, dude"

Santa's on PTO
Burned his calendar, let the deadlines go
No reindeer, no snow patrol
He's ghosted the Pole and gained control
Yeah, he's on a hammock with a tan
Reading fan mail from a fan
Tell the elves "don't call, just go"
Santa's on PTO

You better not pout, better not cry
He's not answering 'til the 25th of July
No cookies, no milk, just rum and lime
Santa's reclaiming his overtime

Santa's on PTO
No sleigh bells, just a radio
Flip-flops where the boots should go
He said "Merry whatever, I'm moving slow"
So, if your tree's on fire
Or your lights won't glow
Too bad, babe Santa's on PTO`;

  const credits = (
    <>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Production</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Artist:</strong> Harley Towers</li>
          <li><strong>Written by:</strong> Harley Towers</li>
          <li><strong>Produced by:</strong> Jacob Robison</li>
          <li><strong>Mixed by:</strong> MRJK Studios</li>
          <li><strong>Mastered by:</strong> MRJK Studios</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Release Information</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Label:</strong> MRJK Records</li>
          <li><strong>Release Date:</strong> June 1, 2025</li>
          <li><strong>Genre:</strong> Holiday/Pop</li>
          <li><strong>Duration:</strong> 3:15</li>
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
      title="Santa's On PTO"
      artist="Harley Towers"
      releaseDate="June 1, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=Lh1CxSsQRVI&list=OLAK5uy_nHYB7FsLDcL7XxNrqNoJAgmcdyUrJmhbk"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D1DC9FD7B%2D1509%2D4336%2D9FEDBC965141046C%2D%2D0%2D%2D3926753%2D%2DHAHHAHA%2Ejpg"
    />
  );
}