import './Home.css';
import { imgPath } from '../../utils/utilityFunctions'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js';

import CountUp from '../../components/CountUp';
import SplitText from "../../components/SplitText";
import TextType from '../../components/TextType/TextType';
import BgParticles from '../../components/BgParticles';

import Hsponsors from '../../components/Hsponsors/Hsponsors';
import Comp from '../../assets/Comp.png'
import Carousel from '../../components/Carousel/Carousel';
import HomeSpeakers from '../../components/HomeSpeakers/HomeSpeakers';

const Home = () => {

  const handleAnimationComplete = () => {
    // console.log('');
  };

  return (
    <>
      <main className="home">

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
                  <div>
                    <SplitText
                      tag="h1"
                      text="IIITG’s biggest tech fest of the year, packed with workshops, thrilling competitions, and exciting prizes."
                      className="h-hero-des"
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

        <section className="h-description">
          <div className="main-title">
            <span className='title-dark'>Discover</span>
            <span className='title-light'>The Chaos</span>
            <span className='title-ruler'></span>
          </div>

          <div className="h-des-textbox appear">

            <div className="des-text">
              <h3 className="text-title">Entropy: A fusion of code, creativity, innovation, and competition.</h3>

              <div className="text-content">
                <p>
                  Entropy is the annual tech fest of IIIT Guwahati — where innovation, creativity, and technology collide. Built by students, for students, it unites brilliant minds from across the region to compete, collaborate, and create.
                </p>
                <p>
                  From coding battles and robotics to AI showcases, gaming, hackathons, and startup pitches — Entropy is more than a fest, it’s a full-blown tech experience.
                </p>
                <p>
                  This year, Entropy returns bigger and bolder with a theme centered on Quantum Tech — challenging you to break boundaries and build what’s next.
                </p>
              </div>

              <div className="features">
                <div className="feature">
                  <div className="feature-icon">
                    <Icon icon="fa6-solid:trophy" />
                  </div>
                  <div className="feature-data">
                    <h4>Competitive Events</h4>
                    <p>Challenge yourself in hackathons, coding competitions, and tech quizzes</p>
                  </div>
                </div>
                {/* <div className="feature">
                  <div className="feature-icon">
                    <Icon icon="fa-solid:atom" />
                  </div>
                  <div className="feature-data">
                    <h4>Industry Workshops</h4>
                    <p>Hands-on sessions with cutting-edge quantum computing platforms</p>
                  </div>
                </div> */}
                <div className="feature">
                  <div className="feature-icon">
                    <Icon icon="zondicons:mic" />
                  </div>
                  <div className="feature-data">
                    <h4>Thought Leadership</h4>
                    <p>Keynotes and panel discussions from industry pioneers</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="des-image" style={{ backgroundImage: `url(${imgPath("HomeDes.png")})` }}>
              {/* <img src={imgPath("HomeDes.png")} alt="Home-img" /> */}
            </div>
          </div>

          <div className="stats appear">

            <div className="stat">
              <div className="stat-value">
                <CountUp
                  from={0}
                  to={10}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+
              </div>
              <div className="stat-tag">
                <p>Events</p>
              </div>
            </div>

            <div className="stat">
              <div className="stat-value">
                <CountUp
                  from={0}
                  to={250}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+
              </div>
              <div className="stat-tag">
                <p>Participants</p>
              </div>
            </div>

            <div className="stat">
              <div className="stat-value">
                ₹<CountUp
                  from={0}
                  to={50}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />Cr+
              </div>
              <div className="stat-tag">
                <p>Prize Pool</p>
              </div>
            </div>
            <div className="stat">
              <div className="stat-value">
                <CountUp
                  from={0}
                  to={20}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />+
              </div>
              <div className="stat-tag">
                <p>Speakers</p>
              </div>
            </div>
          </div>

        </section>


        <section className='home-carousel appear'>
          <div className="main-title">
            <span className='title-dark'>Featured</span>
            <span className='title-light'>Events</span>
            <span className='title-ruler'></span>
          </div>

          <div className="carousel">
            <Carousel />
          </div>
        </section>

        <section className='merch-section appear'>
          <div className="main-title">
            <span className='title-dark'>Grab</span>
            <span className='title-light'>The Chaos</span>
            <span className='title-ruler'></span>
          </div>
          <div className="merch">
            {/* <Merch /> */}
          </div>

        </section>

        <section className='speaker-section'>
          <div className="main-title appear" >
            <span className='title-dark'>Visionary</span>
            <span className='title-light'>Speaker</span>
            <span className='title-ruler'></span>
          </div>
          <div className="speaker">
            <HomeSpeakers />
          </div>

        </section>


        <section className="Event">
          <Hsponsors />
        </section>

      </main >
    </>
  )
}

export default Home