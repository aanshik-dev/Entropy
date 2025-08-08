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

        <section className="ev-hero-content">
          <div className="ev-hero-mask">
            <BgParticles />
          </div>
          <div className="ev-hero">
            <div className="ev-hero-wrapper">
              <div className="ev-hero-title">
                <div className="ev-title-wrap">
                  <SplitText
                    tag="h1"
                    text="EVENTS"
                    className="ev-title-text"
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
                  <div className="ev-tagline-wrap ev-hero-tagline">
                    Unleash your mind in challenging tech battles__
                    <TextType
                      tag="h2"
                      className='ev-hero-tagline ev-tag-overlap'
                      text={["Unleash your mind in challenging tech battles", "Ignite your mind in epic tech showdowns"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="_"
                    />
                  </div>
                  <div>
                    <SplitText
                      tag="h1"
                      text="Explore our events — where tech, creativity, and challenges collide. get ready to innovate, compete, and be inspired!"
                      className="ev-hero-des"
                      delay={50}
                      duration={0.6}
                      ease="power3.out"
                      splitType="lines"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="0px"
                      textAlign="left"
                      onLetterAnimationComplete={() => { }}
                    />
                  </div>
                </div>

                <div className="ev-hero-tags">
                  <div className="ev-hero-tag ev-tag1">
                    <Icon icon="material-symbols:event" />
                    <div>10+ Events</div>
                  </div>
                  <div className="ev-hero-tag ev-tag2">
                    <Icon icon="ri:medal-fill" />
                    <div>₹ 50K+ Prize Pool</div>
                  </div>
                  <div className="ev-hero-tag ev-tag3">
                    <Icon icon="ic:baseline-tips-and-updates" />
                    <div>10+ Events</div>
                  </div>
                </div>

                <div className="ev-hero-updates">
                  <div className="ev-blink"></div>
                  <div className="ev-hero-live">
                    Registration Live
                  </div>
                </div>
              </div>
              <div className="ev-hero-anime">
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