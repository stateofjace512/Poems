import React from 'react';
import SongPage from '../components/SongPage';

export default function GirlDown() {
  const lyrics = `Call a medic call the cops
It's a scene don't try to talk
She's not breathing, make it stop
Someone hold her she's in shock

Lipstick smeared like shattered glass
Tore the dress she wore to class
Said "I'm fine" and then she crashed
Somebody tell her heart to pass

And the sirens scream in silence
All her friends just form a line
With the "he's not worth it" hymns
Like prayers that never rhyme

Call a medic call the cops
It's a scene don't try to talk
She's not breathing, make it stop
Someone hold her she's in shock

It's a heartbreak we got a girl down
Tears are floodin' every part of town
Don't need a stretcher just a sound
Of someone saying "he's not worth the crown"

It's a heartbreak lights are spinning 'round
She's on the floor in her best nightgown
She ain't dying, but she might drown
It's a heartbreak we got a girl down

Drew a chalk line by her phone
Every call she took alone
All the ghosts she tried to own
Still keep texting "you were home"

Dropped her name like it meant weight
Left her love out at the gate
No one's charged but make no mistake
There's a body full of ache

She's a headline on the carpet
"Girl betrayed film at nine"
With a pulse too loud to quiet
And mascara down the spine

Call a medic call the cops
It's a scene don't try to talk
She's not breathing, make it stop
Someone hold her she's in shock

It's a heartbreak we got a girl down
Crowds are gathering to watch her frown
Paramedics in a paper crown
Try to lift her, but she's not coming 'round

It's a heartbreak heartbreak in surround
Who knew silence had a siren sound
She ain't gone, but she's not found
It's a heartbreak we got a girl down

All units be advised
She gave her all and he replied
With "seen at 3:45"
Call the girls, she won't survive

Without a mirror without a lie
She's bleeding hope from both her eyes
Another case of heartbreak homicide

Call a medic call the cops
It's a scene don't try to talk
She's not breathing, make it stop
Someone hold her she's in shock

It's a heartbreak we got a girl down
But she's rising, heels on battleground
She ain't broken just unbound
So make way world, she's takin' back her crown

It's a heartbreak
Or was
She's not your girl down`;

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
          <li><strong>Genre:</strong> Pop/Alternative</li>
          <li><strong>Track:</strong> 10 of 10</li>
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
      title="Girl Down"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=10"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}
