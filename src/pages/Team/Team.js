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
    }
  ]



  const teamsData = [
    {
      Team: 'Heads',
      data: [
        {
          name: 'Ansik Singh Tomar',
          role: 'Tech Team Lead',
          level: '2',
          image: 'teams/tech/Aanshik.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/ansik-singh-tomar-506690279/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '8822630829',
          mail: 'ansik.tomar24b@iiitg.ac.in',
        },
        {
          name: 'Aditya Bhatt',
          role: 'President',
          level: '1',
          image: 'teams/tech/male.webp',
          pos: '50% 50%',
          github: '',
          linkedin: '',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '7999999999',
          mail: 'entropy@iiitg.ac.in',
        },
        {
          name: 'Semal Priya',
          role: 'Sponsorship Lead',
          level: '3',
          image: 'teams/tech/female.webp',
          pos: '50% 50%',
          github: '',
          linkedin: 'https://www.linkedin.com/in/semal-priya-21662b336/',
          insta: 'https://www.instagram.com/icdi_semal/',
          phone: '7091100696',
          mail: 'semal.priya24b@iiitg.ac.in',
        },
      ]
    },

    {
      Team: 'Tech',
      data: [
        {
          name: 'Anuj Parota',
          role: 'Head Coordinator',
          level: '2',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: 'https://github.com/anujOparota',
          linkedin: 'https://www.linkedin.com/in/anuj-parota-315125323',
          insta: 'https://www.instagram.com/anujparota',
          phone: '7023553165',
          mail: 'anuj.parota24b@iiitg.ac.in',
        },
        {
          name: 'Ansik Singh Tomar',
          role: 'Team Lead',
          level: '1',
          image: 'teams/tech/Aanshik.jpg',
          pos: 'center',
          github: 'https://github.com/aanshik-dev',
          linkedin: 'https://www.linkedin.com/in/ansik-singh-tomar-506690279/',
          insta: 'https://www.instagram.com/aanshiq_singh/',
          phone: '8822630829',
          mail: 'ansik.tomar24b@iiitg.ac.in',
        },
        {
          name: 'Nikhil Mehrotra',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: 'https://github.com/NikhilMeh',
          linkedin: 'https://www.linkedin.com/in/nikhil-mehrotra-516032312',
          insta: 'https://www.instagram.com/mehnikhil22?igsh=MWcwZ2Q4MjZkYnNrMg==',
          phone: '9389943737',
          mail: 'nikhil.mehrotra24b@iiitg.ac.in',
        }
      ]
    },

    {
      Team: 'event',
      data: [
        {
          name: 'Arjun Kumar',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: '',
          linkedin: 'https://www.linkedin.com/in/arjun-kumar-1096a6343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          insta: 'https://www.instagram.com/arjunshroff19?igsh=azZqeDJ6N21mMWtt%0a',
          phone: '95093555661',
          mail: 'arjun.kumar24b@iiitg.ac.in',
        },
        {
          name: 'Abhinav Singh Chauhan',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: '',
          linkedin: 'https://www.linkedin.com/in/abhinav-singh-chauhan-a68b74319',
          insta: 'https://www.instagram.com/abhi.nav7_?igsh=NHA2Yno3emJ0MWs1',
          phone: '91193344766',
          mail: 'abhinav.chauhan24b@iiitg.ac.in',
        },
        {
          name: 'Siddhant Vats',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: '',
          linkedin: 'https://www.linkedin.com/in/siddhant-vats-74135b323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          insta: 'https://www.instagram.com/siddhant_vats?igsh=MWpteThzdXVlMmc5bA==',
          phone: '9236819580',
          mail: 'siddhant.vats24b@iiitg.ac.in',
        },
        {
          name: 'Vedant Chaudhari',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: '',
          linkedin: 'https://www.linkedin.com/in/vedant-chaudhari-520bba266/',
          insta: 'https://www.instagram.com/vedantchaudhari13/?igsh=NDJnZnRvYzdtZ2x3',
          phone: '9326634353',
          mail: 'vedant.chaudhari24b@iiitg.ac.in',
        },
        {
          name: 'Anurag Singh',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: '',
          linkedin: '',
          insta: 'https://www.instagram.com/mirchii.0?utm_source=qr&igsh=MTV6azZoYnQ1Z2Jwcw==',
          phone: '9236770869',
          mail: 'anurag.singh24b@iiitg.ac.in',
        },
        {
          name: 'Ashish Sinha',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: '',
          linkedin: 'https://www.linkedin.com/in/ashish-sinha-283667328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          insta: 'https://www.instagram.com/ashish_sinha_31/',
          phone: '8318895695',
          mail: 'ashish.sinha24b@iiitg.ac.in',
        }
      ]
    },

    {
      Team: 'Sponsors',
      data: [
        {
          name: 'Kuldeep Sharma',
          role: 'Head Coordinator',
          level: '2',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: '',
          linkedin: 'https://www.linkedin.com/in/kuldeepsharma-iiitg',
          insta: 'https://www.instagram.com/kulu_it/',
          phone: '7014208868',
          mail: 'kuldeep.sharma24b@iiitg.ac.in',
        },
        {
          name: 'Semal Priya',
          role: 'Team Lead',
          level: '1',
          image: 'teams/tech/female.webp',
          pos: '50% 50%',
          github: '',
          linkedin: 'https://www.linkedin.com/in/semal-priya-21662b336/',
          insta: 'https://www.instagram.com/icdi_semal/',
          phone: '7091100696',
          mail: 'semal.priya24b@iiitg.ac.in',
        },
        {
          name: 'Akshat Keshri',
          role: 'Team Lead',
          level: '3',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: '',
          linkedin: 'https://www.linkedin.com/in/akshat-keshri-018196274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          insta: 'https://www.instagram.com/akshat_keshri_17?igsh=MXY4NjJ3d3l0aTA1Mg==',
          phone: '7870720851',
          mail: 'akshat.keshri24b@iiitg.ac.in',
        },
        {
          name: 'Mudavath Arun Nayak',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: '',
          linkedin: '',
          insta: 'https://www.instagram.com/arun.chowhan.5621?igsh=MXFuaWZpd2FlaXFlaQ==/',
          phone: '9392727540',
          mail: 'mudavath.nayak24b@iiitg.ac.in',
        }
      ]
    },

    {
      Team: 'marketing',
      data: [
        {
          name: 'Shashank Kumar',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/male.webp',
          pos: 'center',
          github: '',
          linkedin: 'https://www.linkedin.com/in/shashank-kumar-60873a323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          insta: 'https://www.instagram.com/damn.shasha.nk',
          phone: '9554429656',
          mail: 'shashank.kumar24b@iiitg.ac.in',
        },

        {
          name: 'Hansika Kumari',
          role: 'Team Member',
          level: '3',
          image: 'teams/tech/female.webp',
          pos: 'center',
          github: '',
          linkedin: 'https://www.linkedin.com/in/hansika-kumari-50494132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          insta: 'https://www.instagram.com/hansi_kaa?igsh=djJ4c3dodGlyZGF0',
          phone: '63937031966',
          mail: 'hansika.kumari24b@iiitg.ac.in',
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
                                          <a href={item.github} target="_blank" rel="noopener noreferrer">
                                            <Icon icon="cib:github" />
                                          </a>
                                        </div>
                                      )
                                    }
                                    {
                                      item.linkedin && (
                                        <div className="t-mem-link">
                                          <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Icon icon="brandico:linkedin-rect" />
                                          </a>
                                        </div>
                                      )
                                    }
                                    {
                                      item.insta && (
                                        <div className="t-mem-link">
                                          <a href={item.insta} target="_blank" rel="noopener noreferrer">
                                            <Icon icon="bi:instagram" />
                                          </a>
                                        </div>
                                      )
                                    }
                                    {
                                      item.phone && (
                                        <div className="t-mem-link">
                                          <a href={`tel:+91${item.phone}`} target="_blank" rel="noopener noreferrer">
                                            <Icon icon="el:phone" />
                                          </a>
                                        </div>
                                      )
                                    }
                                    {
                                      item.mail && (
                                        <div className="t-mem-link">
                                          <a href={`mailto:${item.mail}`} target="_blank" rel="noopener noreferrer">
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