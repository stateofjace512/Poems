import React from 'react';
import SongPage from '../components/SongPage';

export default function IDoIDont() {
  const lyrics = `Mama's cryin', Daddy's proud
The preacher's smilin', readin' vows
My hands are shakin', veil's too tight
And somethin' in me don't feel right

You look like love in a rented suit
But I've seen the man behind the truth
And every promise tastes like chalk
When you're walkin' down the aisle just to walk

I practiced this a hundred nights
But not one word has sounded right

I do, but I don't believe
That this is what forever means
I do, but I don't feel safe
With all this silence on your face
I do, but I don't feel known
I'm starin' down a heart I don't own
So if you want a yes wrapped up in white
Then I do, I don't, not tonight

The chairs are gold, the wine is sweet
But I'm still starvin' for honesty
You booked the band, you wrote your part
But forgot to leave me any heart

They said cold feet means nothin' much
But these heels feel more like runnin' shoes
And all the love that should be loud
Is whisperin' for me to turn around

I wore the ring, I wore the smile
But I've been gone for half this aisle

I do, but I don't believe
That this is what forever means
I do, but I don't feel free
If lovin' you means losin' me
I do, but I don't feel known
I'm starin' down a heart I don't own
So if you want a yes wrapped up in white
Then I do, I don't, not tonight

I won't lie in front of God and friends
To make you look like you never did
I'd rather leave you with your pride
Than live a lifetime in a lie

I do, but I won't stay
When everything in me says walk away
I do, but I don't belong
In this good dress to the wrong damn song
I do, but I don't feel home
And honey, that's all I need to know
So if you're still waitin' for me to try
I do, I don't, and goodbye`;

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
          <li><strong>Release Date:</strong> August 10, 2025</li>
          <li><strong>Genre:</strong> Pop/Alternative</li>
          <li><strong>Duration:</strong> 3:42</li>
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
      title="I Do (I Don't)"
      artist="Georgia Wixen"
      releaseDate="August 10, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=Xn585V3oJtM&list=OLAK5uy_mVzsz2d3hPVA_lJxSB1uHY0Sx0u5-VuGs"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D5889D19C%2DF5B1%2D4BE6%2DBDBCB5BE5D86238A%2D%2D0%2D%2D9283746%2D%2Dididpromocover8%2E11%2E25%2Ejpg"
    />
  );
}