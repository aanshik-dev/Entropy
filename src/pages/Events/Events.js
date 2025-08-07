import EventsTimeline from '../../components/EventsTimeline/EventsTimeline.js'

import './Events.css'
import { imgPath } from '../../utils/utilityFunctions'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js';

import SplitText from "../../components/SplitText";
import TextType from '../../components/TextType/TextType';
import BgParticles from '../../components/BgParticles';

import EventCarousel from '../../components/EventCarousel/EventCarousel';
import Comp from '../../assets/Comp.png'


const Events = () => {

  const handleAnimationComplete = () => {
    // console.log('');
  };


  return (
    <>

      <main className="events">

        <section className="h-hero-content">
          <div className="h-hero-mask">
            <BgParticles />
          </div>
          <div className="h-hero">
            <div className="h-hero-wrapper">
              <div className="h-hero-title">
                <div className="h-title-wrap">
                  <SplitText
                    tag="h1"
                    text="ENTROPY"
                    className="h-title-text"
                    delay={0}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="0px"
                    textAlign="left"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                  <SplitText
                    tag="h1"
                    text="2025"
                    className="h-title-year"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="0px"
                    textAlign="left"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                  <div className="tagline-wrap hero-tagline">
                    Where ideas converge, and entropy unfolds__
                    <TextType
                      tag="h2"
                      className='hero-tagline tag-overlap'
                      text={["Gear Up for IIITG’s Ultimate Tech Carnival", "Where ideas converge, and entropy unfolds"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="_"
                    />
                  </div>
                </div>
                <div className="h-hero-btns">
                  <button className='h-regBtn'>Register Now</button>
                  <button className="h-eventBtn">Explore Events</button>
                </div>
                <div className="h-hero-updates">
                  <div className="blink"></div>
                  <div className="h-hero-live">
                    Registration Live
                  </div>
                </div>
              </div>
              <div className="h-hero-anime">
                <img src={Comp} alt="" />
              </div>
            </div>
          </div>
        </section>


        <section className='event-carousel'>
          <EventCarousel />
        </section>
        <section className='event-timeline'>
          <EventsTimeline />
        </section>


      </main >
    </>
  )
}

export default Events