import React from 'react';
import SongPage from '../components/SongPage';

export default function HoldSecureEvacuate() {
  const lyrics = `Oh uh oh
Oh oh, oh oh oh oh
Oh uh oh
Oh, oh oh oh oh oh

With training, planning
To do what's right
From the first drop-off 
To the last bus ride
Through courage and care
While taking the lead
Together we meet every safety need

Every moment
Of every day
We're standing stronger in every way
Standing ready
Side by side
In every hallway, classroom, and ride

Hold, secure, evacuate
(Know the way)
Lockdown, shelter, no time to delay
Every step taken is one we choose
To keep our children safe
It's what we do 

The ones with the badges who respond to the scene
Turning safety plans
Into real routines
Administrators, bus drivers, teachers, too
Each one playing a part in seeing it through 

From drills to decisions, calm and clear
Rising above panic
And conquering fear

Hold, secure, evacuate
(You know the way)
Lockdown, shelter, no time to delay
Every step taken is one we choose
To keep our children safe
It's what we do 

Hold for safety 
Secure the doors
Shelter from danger
Training for more
Evacuate with purpose
Lockdown tight
Because every kid deserves to sleep safe at night

Standing ready
Side by side
In every hallway, classroom, and ride

Hold, secure, evacuate
(Know the way)
Lockdown, shelter, no time to delay
Every step taken is one we choose
To keep our children safe
It's what we do`;

  const credits = (
    <>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Featured Artists</h3>
        <ul className="text-neutral-700 space-y-1">
          <li>Jessica Acosta</li>
          <li>Jasmine Erica</li>
          <li>Danica Williams</li>
          <li>Georgia Wixen</li>
          <li>Thomas Herring</li>
          <li>Beauregard Trisdale</li>
          <li>Harley Towers</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Release Information</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Label:</strong> MRJK Records</li>
          <li><strong>Release Date:</strong> February 29, 2024</li>
          <li><strong>Genre:</strong> Collaborative/Alternative</li>
          <li><strong>Special Note:</strong> Emergency preparedness anthem</li>
        </ul>
        <div className="mt-4 pt-4 border-t border-neutral-300">
          <p className="text-neutral-500 text-sm">
            Lyrics © Jessica Hanako Hofmockel Acosta. Licensed in perpetuity to Jacob Robison (MRJK).<br />
            Recording ℗ MRJK / Jacob Robison.
          </p>
        </div>
      </div>
    </>
  );

  return (
    <SongPage
      title="Hold, Secure, Evacuate (Know The Way)"
      artist="Various Artists"
      releaseDate="February 29, 2024"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=n0iedwY5s_Q&list=OLAK5uy_mLU5HVhC9evpS30i2qfOJhUUK85kSxzJA"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D7A9F72C5%2DBE14%2D408E%2D868A1582EDF3F6E0%2D%2D0%2D%2D16938%2D%2Dtempcov%2Ejpg"
    />
  );
}