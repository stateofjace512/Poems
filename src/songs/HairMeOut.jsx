import React from 'react';
import SongPage from '../components/SongPage';

export default function HairMeOut() {
  const lyrics = `I didn't come in for wisdom, I came in for bangs
But you're curled up in memory and split ends and shame
You dyed me down slowly, you cut when I grew
So I booked me a chair and I'm bleachin' the proof

You said you'd love me through any phase
But when I turned red, you pulled away

So hair me out, I'm changin' the part
Clippin' your name from the roots of my heart
Got a fresh new wave and a middle-finger blowout
You'll miss me most when it's growin' out
Hair me out, I needed the trim
Of everything toxic I let sink in
I'm leavin' you in the rinse and shout
So baby... hair me out

You said I was dramatic, that's rich from you
Who dyed your guilt blonde and called it truth
I held up the mirror, you looked away
So I let the stylist take my pain

You swore you'd always run your hands through
Funny how quick they forget shampoo

So hair me out, I'm changin' the part
Clippin' your name from the roots of my heart
Got a fresh new wave and a middle-finger blowout
You'll miss me most when it's growin' out
Hair me out, I needed the trim
Of everything toxic I let sink in
I'm leavin' you in the rinse and shout
So baby... hair me out

There's foil in my head and fire in my gut
My stylist said "girl, we're cleanin' this up"
You cut me off, but I cut you last
With a new set of bangs and your name in the trash

Hair me out, I'm done bein' neat
Bleached the ache and toned the weak
You made your choice, I made a crown
With bobby pins and burnin' down
Hair me out, I needed the trim
Of everything I let you break within
I'm leavin' you in the rinse and shout
So shout, so baby... hair me out`;

  const credits = (
    <>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Production</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Artist:</strong> Georgia Wixen</li>
          <li><strong>Written by:</strong> Georgia Wixen</li>
          <li><strong>Produced by:</strong> Jacob Robison</li>
          <li><strong>Mixed by:</strong> MRJK Studios</li>
          <li><strong>Mastered by:</strong> MRJK Studios</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Release Information</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Label:</strong> MRJK Records / Georgia Wixen Records</li>
          <li><strong>Release Date:</strong> August 8, 2025</li>
          <li><strong>Genre:</strong> Pop/Alternative</li>
          <li><strong>Duration:</strong> 3:28</li>
        </ul>
        <div className="mt-4 pt-4 border-t border-neutral-300">
          <p className="text-neutral-500 text-sm">
            Lyrics © Jacob Robison. Licensed in perpetuity to Jacob Robison (MRJK).<br />
            Recording ℗ MRJK / Jacob Robison.<br />
            © MRJK Records 2025 / © Georgia Wixen Records 2025
          </p>
        </div>
      </div>
    </>
  );

  return (
    <SongPage
      title="Hair Me Out"
      artist="Georgia Wixen"
      releaseDate="August 8, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=39zoquh3F9E"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2DED907914%2DC769%2D4575%2DA2C5E3B070BC57E9%2D%2D0%2D%2D334737%2D%2Dhmoinstaedit%2Ejpg"
    />
  );
}