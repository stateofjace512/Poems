import React from 'react';
import SongPage from '../components/SongPage';

export default function OhThereItIs() {
  const lyrics = `I can't find my purse
Have you seen my purse?
Oh, there it is

Everything I am is in that bag
ID, lip gloss, keys to the past
Receipts of heartbreak, coins of regret
Mascara I wore when I first left

I dug through couches, floors, my soul
Thought I lost my self control
Spinning rooms, forgotten names
Empty hands and full of blame

Oh, there it is
In the mirror, in the dark
By the door where I fell apart
Oh, there it is
Sitting still through all my doubt
Like it never even left the house
Oh, there it is
The proof I'm still alive
The purse that holds my life

It's got gum from 2010
A note I never dared to send
A scrunchie that still smells like June
An old receipt for a silver spoon

I thought I lost my place in time
Turns out it was just under my mind
The zipper stuck, the lining torn
But it still carries everything I've worn

Oh, there it is
On the counter by the light
Where I searched a hundred nights
Oh, there it is
(Oh, there it is)
All the weight I thought I dropped
Turns out I just forgot to stop
Oh, there it is

Don't need a map
Don't need a prayer
My purse was always sitting there
And maybe I'm the same as it
Scuffed and loud but still legit

Oh, there it is
Not just leather, not just straps
It's everything I ever had
Oh, there it is
If I ever get lost again
I'll check the purse
And start from then
Oh, there it is
Oh, there it is
Oh, there I am`;

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
          <li><strong>Track:</strong> 1 of 10</li>
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
      title="Oh, There It Is!"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=1"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}