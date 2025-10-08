import './Counter.css'
import { useState, useEffect, useRef } from 'react';
import LaserFlow from './LaserFlow';
import { Icon } from "@iconify/react";
import TimerParticles from '../../components/TimerParticles';
import { useMemo } from 'react';


const LaserImage = () => {
  const Particles = useMemo(() => <TimerParticles />, []);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isLaunched, setIsLaunched] = useState(false);
  const [vOffset, setVOffset] = useState(0.15); // Default value
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setVOffset(0.35);
      } else if (window.innerWidth <= 768) {
        setVOffset(0.3);
      } else {
        setVOffset(0.15);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  // Set your launch date here
  const launchDate = new Date('2025-10-22T23:59:59').getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference <= 0) {
        setIsLaunched(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  if (isLaunched) {
    return null;
  }

  return (


    <>
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#12001ab3',
          backdropFilter: 'blur(20px)',
          zIndex: 9999,
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0) 0px, rgba(255,255,255,0) 60px, rgba(255,255,255,0.3) 90px, rgba(255,255,255,0.6) 150px, rgba(255,255,255,1) 200px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0) 0px, rgba(255,255,255,0) 60px, rgba(255,255,255,0.3) 90px, rgba(255,255,255,0.6) 150px, rgba(255,255,255,1) 200px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          cursor: 'none'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = overlayRef.current;
          if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y}px`);
          }
        }}
        onMouseLeave={() => {
          const el = overlayRef.current;
          if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
          }
        }}
      >
        {Particles}
      </div>


      <div className="wrapper">

        <div className='laser'>
          <LaserFlow
            horizontalBeamOffset={0.0}
            verticalBeamOffset={vOffset}
            color="#6200b3"
            fogIntensity={0.8}
            wispDensity={1.5}
            flowSpeed={0.4}
          />
        </div>


        <div className='counter-box'>
          <div className="counter-info">
            <div className="countHead">
              <h2 className='c-infoHead'>ENTROPY 2025</h2>
              <p className='c-infoTag'>IIIT Guwahati's Biggest Tech Fest</p>
            </div>

            <div className="eventWrap">
              <div className="eventTime">
                <span>
                  <Icon icon="uis:schedule" />
                </span>
                25th & 26th October
              </div>
              <div className="eventTime">
                <span>
                  <Icon icon="mage:hour-glass-fill" />
                </span>
                <div>
                  Website live on 23th October 2025
                </div>
              </div>
            </div>
            <div className="social clickable">
              <a href="https://www.linkedin.com/company/entropy-iiit-guwahati/" target='_blank' className='linkedin' rel='noopener noreferrer'>
                <Icon icon="simple-icons:linkedin" />
              </a>
              <a href="https://www.instagram.com/entropy_iiitg/" target='_blank' rel='noopener noreferrer' className='insta' >
                <Icon icon="simple-icons:instagram" />
              </a>
              <a href="https://www.facebook.com/iiitghy" target='_blank' rel='noopener noreferrer' className='facebook'>
                <Icon icon="simple-icons:facebook" />
              </a>
            </div>
          </div>

          <div className='counter-wrap'>
            <h1 className='timer-title'>
              Coming Soon
            </h1>

            <div className='timerContent'>
              <TimeUnit value={timeLeft.days} label="DAYS" />
              <TimeUnit value={timeLeft.hours} label="HOURS" />
              <TimeUnit value={timeLeft.minutes} label="MINUTES" />
              <TimeUnit value={timeLeft.seconds} label="SECONDS" />
            </div>

            <p className='instruct'>
              Move your cursor to reveal what's behind!
            </p>
          </div>

        </div>

      </div >
    </>

  );
};

// Subcomponent for each time unit
const TimeUnit = ({ value, label }) => (
  <div className='timerUnit'>
    <div className='unitVal'>
      {value.toString().padStart(2, '0')}
    </div>
    <div className='unitLabel'>
      {label}
    </div>
  </div>
);

export default LaserImage;