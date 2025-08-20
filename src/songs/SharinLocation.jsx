import React from 'react';
import SongPage from '../components/SongPage';

export default function SharinLocation() {
  const lyrics = `I never turned it off
Didn't even meant to leave it on
But now I see you move through cities
Like I'm still 'spose to belong

It pings at two AM
You're somewhere I've never been
And I shouldn't care 
I swear I don't
But I keep zooming in

I used to ask where you were
Now I just know
And somehow that hurts more
Than hearing you go

(No good at this)

Sharin' location
But no communication
I know your cross streets
But not your situation
It lights up
But you never call
I guess I'm watching
Just to feel involved

Sharin' location
Like a leftover thread
Still tracking you
While you forget I bled
I could turn it off
But that would mean I've healed
And baby
I don't want what's real

You left me unread
But not unsigned out
Still showing up
Like I'm the one who's lost route

You said, "It's just a safety thing"
But now you're safe and I'm unraveling
In aisle five, just tryna breathe
While your dot's downtown
And you don't miss me

I moved on, except for this
I moved out, but still exist
In some small green glowing dot
That won't admit what I forgot

I used to be the place you'd go
Now I'm just a signal low

(Ain't no way though)

Just
Sharin' location
Like a wire still crossed
Like the part of me
That never got lost
It lights up
And I stare too long
Like if I blink, you might come home

Sharin' location, but no destination
Guess heartbreak ain't got navigation
I could turn it off
But I'd still feel you there
And baby
That's worse than air`;

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
          <li><strong>Track:</strong> 4 of 10</li>
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
      title="Sharin' Location"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=4"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}
