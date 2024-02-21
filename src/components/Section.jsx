import React from 'react'
import bgvideo from '../assets/blackhole.webm';

const Section = () => {
  return (
    <>
      <div className='container'>
        <video src={bgvideo} autoPlay loop muted />
        <div className="titles">
          <h1 className='title'>Blackholes</h1>
          <p className='subtitle'>Black holes are mysterious cosmic entities with gravitational forces so intense that nothing, not even light, can escape their gravitational pull.</p>
        </div>
      </div>
      <section className='bodySection'>
        <h1 className='sTitle'>Black Holes</h1>
        <p className='sDetail'>Don't let the name fool you: a black hole is anything but empty space. Rather, it is a great amount of matter packed into a very small area - think of a star ten times more massive than the Sun squeezed into a sphere approximately the diameter of New York City. The result is a gravitational field so strong that nothing, not even light, can escape. In recent years, NASA instruments have painted a new picture of these strange objects that are, to many, the most fascinating objects in space.</p>
        <div className='bkImages'>
          <img src="https://wallpapercosmos.com/w/middle-retina/7/0/6/26427-3840x2160-desktop-4k-black-hole-wallpaper-image.jpg" alt="bk1" />
        </div>
        <p className='sDetail'>The idea of an object in space so massive and dense that light could not escape it has been around for centuries. Most famously, black holes were predicted by Einstein's theory of general relativity, which showed that when a massive star dies, it leaves behind a small, dense remnant core. If the core's mass is more than about three times the mass of the Sun, the equations showed, the force of gravity overwhelms all other forces and produces a black hole.</p>
        <div className='bkImages'>
          <img src="https://wallpapercosmos.com/w/middle-retina/8/5/1/71058-3840x2160-desktop-4k-black-hole-background-photo.jpg" alt="bk2" />
        </div>
        <p className='sDetail'>Most black holes form from the remnants of a large star that dies in a supernova explosion. (Smaller stars become dense neutron stars, which are not massive enough to trap light.) If the total mass of the star is large enough (about three times the mass of the Sun), it can be proven theoretically that no force can keep the star from collapsing under the influence of gravity. However, as the star collapses, a strange thing occurs. As the surface of the star nears an imaginary surface called the "event horizon," time on the star slows relative to the time kept by observers far away. When the surface reaches the event horizon, time stands still, and the star can collapse no more - it is a frozen collapsing object.</p>
      </section>
    </>
  )
}

export default Section;