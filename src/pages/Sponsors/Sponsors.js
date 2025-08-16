import './Sponsors.css';
import { imgPath } from '../../utils/utilityFunctions'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js';

import SplitText from "../../components/SplitText";
import TextUp from '../../components/TextUp';
import BgParticles from '../../components/BgParticles';

import Comp from '../../assets/Comp.png'


const Sponsors = () => {

  const texts = ["Tech meets trust — These brands are believing in madness", "Where trust and chaos unite to power true disruption"];

  return (
    <>
      <main className="sponsors">

        <section className="s-hero-content">
          <div className="s-hero-mask">
            <BgParticles />
          </div>
          <div className="s-hero">
            <div className="s-hero-wrapper">
              <div className="s-hero-title">
                <div className="s-title-wrap">
                  <SplitText
                    tag="h1"
                    text="SPONSORS"
                    className="s-title-text"
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

                  <div className="s-hero-tagline">
                    <TextUp texts={texts} intervalTime={4000} animDuration={300} />
                  </div>

                  <div>
                    <SplitText
                      tag="h1"
                      text="A HUGE THANK YOU TO OUR AMAZING SPONSORS! YOUR SUPPORT MEANS THE WORLD TO US, AND WE TRULY APPRECIATE YOUR GENEROSITY."
                      className="s-hero-des"
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

                <div className="s-hero-tags">
                  <div className="s-hero-tag s-tag1">
                    <Icon icon="material-symbols:star-shine-rounded" />
                    <div>20+ Brands</div>
                  </div>
                  <div className="s-hero-tag s-tag2">
                    <Icon icon="ic:outline-business" />
                    <div>Industry partners</div>
                  </div>
                  <div className="s-hero-tag s-tag3">
                    <Icon icon="ic:baseline-tips-and-updates" />
                    <div>Innovation Leaders</div>
                  </div>
                </div>

              </div>
              <div className="s-hero-anime">
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

          <div className="h-des-textbox">

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
                    <h4>20+ Sponsors</h4>
                    <p>Proudly supported by 20+ leading tech and industry partners</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="des-image" style={{ backgroundImage: `url(${imgPath("SponsorDes.webp")})` }}>
              {/* <img src={imgPath("SponsorDes.webp")} alt="Home-img" /> */}
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

export default Sponsors