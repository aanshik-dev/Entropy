import CountUp from '../../components/CountUp';
import SplitText from "../../components/SplitText";
import TextType from '../../components/TextType/TextType';
import './Home.css';
import BgParticles from '../../components/BgParticles';
import Hsponsors from '../../components/Hsponsors/Hsponsors';
import Comp from '../../assets/Comp.png'

const Home = () => {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
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
                  <h1>
                    <SplitText
                      text="ENTROPY"
                      className=""
                      delay={100}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                      onLetterAnimationComplete={handleAnimationComplete}
                    /></h1>
                  <h1>
                    <SplitText
                      text="2025"
                      className=""
                      delay={100}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                      onLetterAnimationComplete={handleAnimationComplete}
                    /></h1>
                  {/* <h1>2025</h1> */}

                  <h2>
                    <TextType
                      text={["Minds entangles in the dance of entropy", "Gear Up for IIITG’s Ultimate Tech Carnival"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="_"
                    /></h2>
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



        {/*
          <section className="Intro">
          <CountUp
            from={0}
            to={50}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
          <div className="About__content">
            <h1 className="About__title">Discover</h1>
            <h2 className="About__subtitle">The Chaos</h2>
          </div>
        </section>

        <section className="Event">
          <Hsponsors />
        </section>
        <section className="merch">
          <div className="About__content">
            <h1 className="About__title">Merch</h1>
            <h2 className="About__subtitle">Shop</h2>
          </div>
        </section> */}

      </main >
    </>
  )
}

export default Home