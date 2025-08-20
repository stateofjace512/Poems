import React from 'react';
import SongPage from '../components/SongPage';

export default function YouCantTopThis() {
  const lyrics = `i saw her in your story
blonde too sweet
wearin' that smile you said you hated on me
she copies my laugh my pose my tone
tell me baby how's it feel dating a clone

you say "it's different" but she orders what i did
you say "i've moved on" but your playlist still hits
you're lookin' for me in lips that don't bite
you're in love with the ghost you swore you didn't like

YOU CAN'T TOP THIS
top this
top this
top this
top this
top this
top this
i'm the climax in your silence
in your silence
in your silence
in your silence
the name you skip in therapy the girl who made you timeless
oh go ahead play pretend
but every high's a myth
you can date lips but
YOU CAN'T TOP THIS

i'm not mad
i'm not pressed
i got promoted to "ex you regret"
i sleep fine while you obsess over girls who dress like me
and almost impress

you say "she's better"
but she quotes my line
you said you're "over it" then liked my post at midnight
you ran away but i became the sky
you can't stop watching what you let die

YOU CAN'T TOP THIS
i'm the peak that broke your meter
the taste in your new lips
that only makes it weaker
try again call it bliss
but every touch still twists
you can move your hips but
YOU CAN'T TOP THIS

you didn't break me
you branded me
every girl after carries a piece of me
you don't date you compare
you don't heal you stare
you made you mess but i made history

YOU CAN'T TOP THIS
i'm the burn beneath your rebound
the echo in your new sound
the scream you can't admit
go flirt go fuck go fake a fit
you'll get a spark but not this hit
you had a flame but I lit the wick
and baby you can't
top this`;

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
          <li><strong>Track:</strong> 9 of 10</li>
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
      title="You Can't Top This"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=9"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}