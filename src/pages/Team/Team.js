import './Team.css';
import { imgPath } from '../../utils/utilityFunctions'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js';

import SplitText from "../../components/SplitText";
import TextType from '../../components/TextType/TextType';
import BgParticles from '../../components/BgParticles';

import Comp from '../../assets/Comp.png'
import { useState } from 'react';

const Team = () => {

  const navData = [
    {
      titleDark: 'Heads',
      titlelight: 'of Havoc',
      des: 'Meet the leaders who shaped Entropy 2025',
    },
    {
      titleDark: 'The Code',
      titlelight: 'Architects',
      des: 'Meet the tech team behind Entropy’s digital experience',
    },
    {
      titleDark: 'Ground',
      titlelight: 'Zero Crew',
      des: 'Meet the team managing every Entropy event seamlessly',
    },
    {
      titleDark: 'Funding',
      titlelight: 'the Future',
      des: 'Meet the team bringing brands onboard for Entropy',
    },
    {
      titleDark: 'Buzz',
      titlelight: 'Makers',
      des: 'Meet the team crafting stories, campaigns, and moments that put Entropy on everyone’s feed',
    },
    {
      titleDark: 'Network',
      titlelight: 'Nexus',
      des: 'Meet the team turning connections into collaborations that power Entropy forward',
    }
  ]

  const [teamNum, setTeamNum] = useState(0);
  const teamCount = navData.length;

  const swipeStyle = {
    transform: `translateX(${teamNum * -100}%)`,
    transition: 'transform 0.5s ease-in-out'
  };

  const handleSwipe = (direction) => {
    if (direction === 'left' && teamNum > 0) {
      setTeamNum((prevNum) => prevNum - 1);
    } else if (direction === 'right' && teamNum < teamCount - 1) {
      setTeamNum((prevNum) => prevNum + 1);
    }
  };

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
                    text="OUR TEAM"
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
            <span className='title-dark'>Meet</span>
            <span className='title-light'>the Team</span>
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
              {/* <img src={imgPath("TeamDes.jpg")} alt="Home-img" /> */}
            </div>
          </div>
          {/* 
          <div className="group-photo">
            <img src={imgPath("team.png")} alt="" />
          </div> */}
        </section>


        <section className='teams-section'>

          <div className="t-nav-content">
            <div className="t-nav-arrow" onClick={() => handleSwipe('left')}>
              <Icon icon="ep:arrow-left-bold" />
              <Icon className='t-arrow-left' icon="ep:arrow-left-bold" />
            </div>
            <div className="team-nav">

              <div className="team-switch-wrap" style={swipeStyle}>
                {
                  navData.map((item, index) => (

                    <div className="t-nav-switch" key={index}>
                      <div className="t-nav-head">
                        <span className='t-nav-ruler t-nav-ruler-rev'></span>
                        <div className='t-nav-title'>
                          <span>{item.titleDark}</span>
                          <span className='t-nav-title-light'>{item.titlelight}</span>
                        </div>
                        <span className='t-nav-ruler'></span>
                      </div>
                      <div className="t-nav-head-info">
                        {item.des}
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>
            <div className="t-nav-arrow" onClick={() => handleSwipe('right')}>
              <Icon className='t-arrow-right' icon="ep:arrow-right-bold" />
              <Icon icon="ep:arrow-right-bold" />
            </div>
          </div>

          <div className="teams-container">
            <div className="t-teams-wrap">

              <div className="t-team-content">

                <div className="t-mem-card">
                  <div className="mem-image-box">
                    <div className="mem-card-shade"></div>
                    <div className="mem-image-wrap">
                      <img src={imgPath("teams/tech/Aanshik.jpg")} alt="Aanshik" />
                    </div>
                  </div>
                  <div className="t-mem-data">
                    <div className='t-mem-name'>Anshik Singh</div>
                    <div className='t-mem-role'>Team Memeber</div>
                    <div className="t-mem-contacts">
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="cib:github" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="brandico:linkedin-rect" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="bi:instagram" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="el:phone" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="streamline:mail-send-envelope-solid" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mem-card-bar"></div>
                </div>

                <div className="t-mem-card">
                  <div className="mem-image-box">
                    <div className="mem-card-shade"></div>
                    <div className="mem-image-wrap">
                      <img src={imgPath("teams/tech/Aanshik.jpg")} alt="Aanshik" />
                    </div>
                  </div>
                  <div className="t-mem-data">
                    <div className='t-mem-name'>Anshik Singh</div>
                    <div className='t-mem-role'>Team Memeber</div>
                    <div className="t-mem-contacts">
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="cib:github" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="brandico:linkedin-rect" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="bi:instagram" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="el:phone" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="streamline:mail-send-envelope-solid" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mem-card-bar"></div>
                </div>

                <div className="t-mem-card">
                  <div className="mem-image-box">
                    <div className="mem-card-shade"></div>
                    <div className="mem-image-wrap">
                      <img src={imgPath("teams/tech/Aanshik.jpg")} alt="Aanshik" />
                    </div>
                  </div>
                  <div className="t-mem-data">
                    <div className='t-mem-name'>Anshik Singh</div>
                    <div className='t-mem-role'>Team Memeber</div>
                    <div className="t-mem-contacts">
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="cib:github" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="brandico:linkedin-rect" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="bi:instagram" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="el:phone" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="streamline:mail-send-envelope-solid" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mem-card-bar"></div>
                </div>

                <div className="t-mem-card">
                  <div className="mem-image-box">
                    <div className="mem-card-shade"></div>
                    <div className="mem-image-wrap">
                      <img src={imgPath("teams/tech/Aanshik.jpg")} alt="Aanshik" />
                    </div>
                  </div>
                  <div className="t-mem-data">
                    <div className='t-mem-name'>Anshik Singh</div>
                    <div className='t-mem-role'>Team Memeber</div>
                    <div className="t-mem-contacts">
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="cib:github" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="brandico:linkedin-rect" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="bi:instagram" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="el:phone" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="streamline:mail-send-envelope-solid" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mem-card-bar"></div>
                </div>

                <div className="t-mem-card">
                  <div className="mem-image-box">
                    <div className="mem-card-shade"></div>
                    <div className="mem-image-wrap">
                      <img src={imgPath("teams/tech/Aanshik.jpg")} alt="Aanshik" />
                    </div>
                  </div>
                  <div className="t-mem-data">
                    <div className='t-mem-name'>Anshik Singh</div>
                    <div className='t-mem-role'>Team Memeber</div>
                    <div className="t-mem-contacts">
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="cib:github" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="brandico:linkedin-rect" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="bi:instagram" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="el:phone" />
                        </a>
                      </div>
                      <div className="t-mem-link">
                        <a href="mailto:">
                          <Icon icon="streamline:mail-send-envelope-solid" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mem-card-bar"></div>
                </div>


              </div>
            </div>
          </div>

        </section>



      </main >


    </>
  )
}

export default Team