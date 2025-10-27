import './Contacts.css';
import { imgPath } from '../../utils/utilityFunctions'
import { Icon } from '@iconify/react/dist/iconify.js';

import SplitText from "../../components/SplitText";
import BgParticles from '../../components/BgParticles';
import TextUp from '../../components/TextUp';
import ContactForm from '../../components/ContactForm/ContactForm';


const Contacts = () => {
  const texts = ["Reach out — because even particles communicate", "Let’s connect — our inbox is always charged"
  ];

  return (
    <>
      <main className="contacts">

        <section className="c-hero-content">
          <div className="c-hero-mask">
            <BgParticles />
          </div>
          <div className="c-hero">
            <div className="c-hero-wrapper">
              <div className="c-hero-title">
                <div className="c-title-wrap">
                  <SplitText
                    tag="h1"
                    text="REACH OUT"
                    className="c-title-text"
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
                  <div className="c-hero-tagline">
                    <TextUp texts={texts} intervalTime={4000} animDuration={300} />
                  </div>
                  <div>
                    <SplitText
                      tag="h1"
                      text="HAVE QUESTIONS, SUGGESTIONS, OR IDEAS TO SHARE? WE’RE ALWAYS EAGER TO CONNECT. YOUR THOUGHTS AND FEEDBACK INSPIRE US TO GROW STRONGER EACH DAY. DON’T HESITATE TO REACH OUT — WE’RE JUST A MESSAGE AWAY, ALWAYS READY TO HELP!"
                      className="c-hero-des"
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

                <div className="c-hero-tags">
                  <div className="c-hero-tag c-tag1">
                    <Icon icon="solar:phone-bold-duotone" />
                    <div>+91 88828 96275</div>
                  </div>
                  <div className="c-hero-tag c-tag2">
                    <Icon icon="dashicons:email" />
                    <div>entropy@iiitg.ac.in</div>
                  </div>
                </div>

              </div>
              {/* <div className="c-hero-anime">
                <img src={imgPath("Comp.png")} alt="" />
              </div> */}
            </div>
          </div>
        </section>
        {/* 
        <section className="h-description">
          <div className="main-title">
            <span className='title-dark'>Team</span>
            <span className='title-light'>Message</span>
            <span className='title-ruler'></span>
          </div>

          <div className="h-des-textbox">

            <div className="des-text">
              <h3 className="text-title">Entropy: A fusion of code, creativity, innovation, and competition.</h3>

              <div className="text-content">
                <p>
                  Entropy 2025 is more than just a tech fest — it’s a vision brought to life by an incredible team. Every idea shared, every late night coding session, every creative spark added to the magic of this event.
                </p>
                <p>
                  To every team member who contributed their time, talent, and energy — your dedication turned dreams into reality. Together, we didn’t just build an event; we created experiences, inspired curiosity, and shaped the future of innovation.
                </p>
                <p>
                  This fest is ours, and it wouldn’t have been possible without each one of you.
                </p>
              </div>

              <div className="features">
                <div className="feature">
                  <div className="feature-icon">
                    <Icon icon="fa-solid:atom" />
                  </div>
                  <div className="feature-data">
                    <h4>50+ Members</h4>
                    <p>Proudly supported by 20+ leading tech and industry partners</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="des-image" style={{ backgroundImage: `url(${imgPath("SponsorDes.webp")})` }}>
            </div>
          </div>
        </section> */}

        <div className="c-form-sec">
          <ContactForm />
        </div>

      </main >


    </>
  )
}

export default Contacts