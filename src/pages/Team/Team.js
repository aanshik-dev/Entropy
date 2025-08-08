import './Team.css';
import { imgPath } from '../../utils/utilityFunctions'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js';

import SplitText from "../../components/SplitText";
import TextType from '../../components/TextType/TextType';
import BgParticles from '../../components/BgParticles';

import Comp from '../../assets/Comp.png'


const Team = () => {
  return (
    <>
      <main className="team">

        <section className="t-hero-content">
          <div className="t-hero-mask">
            <BgParticles />
          </div>
          <div className="t-hero">
            <div className="t-hero-wrapper">
              <div className="t-hero-title">
                <div className="t-title-wrap">
                  <SplitText
                    tag="h1"
                    text="THE TEAM"
                    className="t-title-text"
                    delay={0}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="0px"
                    textAlign="left"
                    onLetterAnimationComplete={() => { }}
                  />
                  <div className="tagline-wrap hero-tagline">
                    Shaping Structure from the Unpredictable__
                    <TextType
                      tag="h2"
                      className='hero-tagline tag-overlap'
                      text={["Creators of Order in Controlled Chaos", "Shaping Structure from the Unpredictable"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="_"
                    />
                  </div>
                  <div>
                    <SplitText
                      tag="h1"
                      text="From strategists to coders, designers to coordinators — our diverse team blends passion, creativity, and dedication to bring Entropy 2025 to life."
                      className="t-hero-des"
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

                <div className="t-hero-tags">
                  <div className="t-hero-tag t-tag1">
                    <Icon icon="fluent:people-team-16-filled" />
                    <div>5 Squads</div>
                  </div>
                  <div className="t-hero-tag t-tag2">
                    <Icon icon="fluent:person-28-filled" />
                    <div>50+ Task Force</div>
                  </div>
                </div>

              </div>
              <div className="t-hero-anime">
                <img src={Comp} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="h-description">
          <div className="main-title">
            <span className='title-dark'>The Fuel</span>
            <span className='title-light'>Behind the Future</span>
            <span className='title-ruler'></span>
          </div>

          <div className="h-des-textbox appear">

            <div className="des-text">
              <h3 className="text-title">Entropy: A fusion of code, creativity, innovation, and competition.</h3>

              <div className="text-content">
                <p>
                  It takes more than code to power a tech fest like Entropy 2025 — it takes belief.Our sponsors didn’t just fund an event; they backed a vision. From tech titans to local legends, these partners invested in creativity, innovation, and the next generation of disruptors.
                </p>
                <p>
                  Their support helped us craft unforgettable experiences, spark curiosity, and launch dreams into the digital cosmos.
                </p>
                <p>
                  To every brand, company, and contributor who believed in Entropy — this madness was made possible because of you.
                </p>
              </div>

              <div className="features">
                <div className="feature">
                  <div className="feature-icon">
                    <Icon icon="fa-solid:atom" />
                  </div>
                  <div className="feature-data">
                    <h4>50+ Members</h4>
                    <p>Proudly supported by 50+ leading tech and industry partners</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="des-image">
              <img src={imgPath("TeamDes.jpg")} alt="Home-img" />
            </div>
          </div>
        </section>


        <section className='legacy-sponsors'>
          <div className="mid-heading">
            <div className="mid-head-title">
              <span className='mid-ruler'></span>
              <div className='mid-title-dark'>Legacy</div>
              <div className='mid-title-light'>Sponsors</div>
              <span className='mid-ruler ruler-rev'></span>
            </div>
            <div className="mid-head-info">
              Behind every innovation, there’s a sponsor who believed in possibility
            </div>
          </div>

        </section>



      </main >


    </>
  )
}

export default Team