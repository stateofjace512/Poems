import React from 'react';
import SongPage from '../components/SongPage';

export default function ReturnPolicy() {
  const lyrics = `I walked in holding the box like it was a bomb
Gift receipt folded, taped to the top
Said "I just want store credit,"
Like that could make up for what I lost

The lady at the counter said, "You're outside the return window"
And I almost laughed
Girl, tell me about it

What's your return policy on heartbreak?
Can I get back time I didn't mean to spend?
Can I exchange this version of myself
For the one I was back then?
If I still have the box
And I never wore the love
Can I bring it back?
Can I get enough?

Ooh, ooh

I kept the tags on
I knew I'd regret it
Didn't rip the seams
Didn't leave a mark
Why can't I give it back?

You said "final sale"
But I didn't know that meant me
You said I should've read the fine print
But I was too busy writing your name in cursive on every receipt

What's your return policy on heartbreak?
Can I get back time I didn't mean to spend?
Can I exchange this version of myself
For the one I was back then?
If I still have the box
And I never wore the love
Can I bring it back?
Can I get enough?`;

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
          <li><strong>Track:</strong> 3 of 10</li>
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
      title="Return Policy"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=3"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}