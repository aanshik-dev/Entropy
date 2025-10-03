import './Team.css';
import { imgPath } from '../../utils/utilityFunctions'
import { Icon } from '@iconify/react/dist/iconify.js';

import SplitText from "../../components/SplitText";
import BgParticles from '../../components/BgParticles';
import TextUp from '../../components/TextUp';

import { useState, useRef, useEffect } from 'react';

const Team = () => {

  const texts = ["Creators of Order in Controlled Chaos", "Shaping Structure from the Unpredictable"];

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



  const teamsData = [
    {
      Team: 'Heads',
      data: [
        {
          name: 'Natasha Romanoff',
          role: 'Head Coordinator',
          level: '2',
          image: 'teams/tech/Natasha.jpg',
          pos: '50% 30%',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: '',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Ansik',
          role: 'Team Lead',
          level: '1',
          image: 'teams/tech/Tony.jpg',
          pos: '50% 50%',
          github: '',
          linkedin: '',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        }
      ]
    },

    {
      Team: 'Tech',
      data: [
        {
          name: 'Natasha Romanoff',
          role: 'Head Coordinator',
          level: '2',
          image: 'teams/tech/Natasha.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: '',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Tony Stark',
          role: 'Team Lead',
          level: '1',
          image: 'teams/tech/Tony.jpg',
          pos: 'center',
          github: '',
          linkedin: '',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        }
      ]
    },

    {
      Team: 'event',
      data: [
        {
          name: 'Natasha Romanoff',
          role: 'Head Coordinator',
          level: '2',
          image: 'teams/tech/Natasha.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: '',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Tony Stark',
          role: 'Team Lead',
          level: '1',
          image: 'teams/tech/Tony.jpg',
          pos: 'center',
          github: '',
          linkedin: '',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        }
      ]
    },

    {
      Team: 'Sponsors',
      data: [
        {
          name: 'Natasha Romanoff',
          role: 'Head Coordinator',
          level: '2',
          image: 'teams/tech/Natasha.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: '',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Tony Stark',
          role: 'Team Lead',
          level: '1',
          image: 'teams/tech/Tony.jpg',
          pos: 'center',
          github: '',
          linkedin: '',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        }
      ]
    },

    {
      Team: 'marketing',
      data: [
        {
          name: 'Natasha Romanoff',
          role: 'Head Coordinator',
          level: '2',
          image: 'teams/tech/Natasha.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: '',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Tony Stark',
          role: 'Team Lead',
          level: '1',
          image: 'teams/tech/Tony.jpg',
          pos: 'center',
          github: '',
          linkedin: '',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
      ]
    },

    {
      Team: 'pr',
      data: [
        {
          name: 'Natasha Romanoff',
          role: 'Head Coordinator',
          level: '2',
          image: 'teams/tech/Natasha.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: '',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Tony Stark',
          role: 'Team Lead',
          level: '1',
          image: 'teams/tech/Tony.jpg',
          pos: 'center',
          github: '',
          linkedin: '',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker ',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Peter Parker',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/Tom.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/abhishekgupta/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        }
      ]
    },
  ]


  const roleStyle = (level) => {
    let barStyle, imgStyle;
    if (level === '1') {
      barStyle = { background: 'linear-gradient(90deg, #e3bd00, #aa6b00)' };
      imgStyle = { background: 'linear-gradient(45deg, #aa6b00, #e3bd00)' };

    } else if (level === '2') {
      barStyle = { background: 'linear-gradient(90deg, #fc44ffff, #9100a7ff)' };
      imgStyle = { background: 'linear-gradient(45deg, #8500aaff, #df00e3ff)' };

    } else {
      barStyle = { background: 'linear-gradient(90deg, #a600e3ff, #570091ff)' };
      imgStyle = { background: 'linear-gradient(45deg, #570091ff, #a600e3ff)' };
    }
    return { barStyle, imgStyle };
  }



  const [teamNum, setTeamNum] = useState(0);
  const teamCount = navData.length;
  const [containerHeight, setContainerHeight] = useState(0);
  const teamRefs = useRef([]);

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

  useEffect(() => {
    if (teamRefs.current[teamNum]) {
      setContainerHeight(teamRefs.current[teamNum].offsetHeight);
    }
  }, [teamNum]);

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (teamRefs.current[teamNum]) {
          setContainerHeight(teamRefs.current[teamNum].offsetHeight);
        }
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [teamNum]);


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
                  <div className="s-hero-tagline">
                    <TextUp texts={texts} intervalTime={4000} animDuration={300} />
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
                <img src={imgPath("Comp.png")} alt="SBI Logo" />
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
        </section>


        <section className='teams-section'>

          <div className="t-nav-content appear">
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



          <div className="teams-container" style={{ height: containerHeight }}>
            <div className="t-teams-wrap" style={swipeStyle} >

              {
                teamsData.map((team, idx) => {

                  return (
                    <div className="t-team-wrap" key={idx}>

                      <div className="t-team-content" ref={(el) => teamRefs.current[idx] = el}>
                        {
                          team.data.map((item, index) => {
                            const styles = roleStyle(item.level);

                            return (
                              <div className={`t-mem-card ${item.level === '1' ? 't-lead' : ''}`} key={index}>
                                <div className="mem-image-box">
                                  <div className="mem-card-shade"></div>
                                  <div className="mem-image-wrap" style={styles.imgStyle}>
                                    <img src={imgPath(item.image)} alt={item.name} style={{ objectPosition: item.pos }} />
                                  </div>
                                </div>
                                <div className="t-mem-data">
                                  <div className='t-mem-name'>{item.name}</div>
                                  <div className='t-mem-role'>{item.role}</div>
                                  <div className="t-mem-contacts">

                                    {
                                      item.github && (
                                        <div className="t-mem-link">
                                          <a href={item.github}>
                                            <Icon icon="cib:github" />
                                          </a>
                                        </div>
                                      )
                                    }
                                    {
                                      item.linkedin && (
                                        <div className="t-mem-link">
                                          <a href={item.linkedin}>
                                            <Icon icon="brandico:linkedin-rect" />
                                          </a>
                                        </div>
                                      )
                                    }
                                    {
                                      item.insta && (
                                        <div className="t-mem-link">
                                          <a href={item.insta}>
                                            <Icon icon="bi:instagram" />
                                          </a>
                                        </div>
                                      )
                                    }
                                    {
                                      item.phone && (
                                        <div className="t-mem-link">
                                          <a href={`tel:+91${item.phone}`}>
                                            <Icon icon="el:phone" />
                                          </a>
                                        </div>
                                      )
                                    }
                                    {
                                      item.mail && (
                                        <div className="t-mem-link">
                                          <a href={`mailto:${item.mail}`}>
                                            <Icon icon="streamline:mail-send-envelope-solid" />
                                          </a>
                                        </div>
                                      )
                                    }
                                  </div>
                                </div>
                                <div className="mem-card-bar" style={styles.barStyle}></div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>

        </section>



      </main >


    </>
  )
}

export default Team