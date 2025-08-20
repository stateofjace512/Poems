import React from 'react';
import SongPage from '../components/SongPage';

export default function SatWithThat() {
  const lyrics = `I didn't call
I didn't beg
I didn't shake, or break, or chase
I just poured a glass of water
Sat in your echo
And watched the room reshape

You said what you said
You meant it, or you didn't
Doesn't really matter, I heard it
Filed it
Sat with it

You always needed noise
To cover what you lack
But me? I just went quiet
And never came back

I sat with that
Didn't flinch
Didn't cry
Didn't need to react
Just pressed rewind
Watched you collapse
Without ever lifting a match

I sat with that
With the lie, with the crack
With the version of me
That didn't fight back
You ran from the silence
But I made it a map
I sat with that
And I never looked back

I don't scream
I don't post
I don't share my pain for votes
I light no fires
I write no names
But baby, I remember everything

You thought I'd break
You thought I'd break things
But I just cleaned my kitchen
And deleted your number like it never touched anything real

I sat with that
Till it stopped hurting
Till your words turned
Into background learning
No revenge
No collapse
No panic attack
I just sat with that
And I never looked back

I sat with that
With grace, with poise
With the dignity
You called a ploy
I don't need proof
I don't need applause
I sat with that
And I know what it was`;

  const credits = (
    <>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Production</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Performed by:</strong> Jasmine Erica</li>
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
          <li><strong>Track:</strong> 5 of 10</li>
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
      title="I Sat With That"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=5"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}