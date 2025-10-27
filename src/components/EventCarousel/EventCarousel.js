import { useState, useEffect, useRef, useMemo } from 'react';
import './EventCarousel.css'
import { Icon } from '@iconify/react/dist/iconify.js';
import { imgPath } from '../../utils/utilityFunctions'


const EventCarousel = () => {



  const SlideData = [
    {
      image: 'Opening.webp',
      pos: '50% 70%',
      icon: 'material-symbols:rocket-launch-rounded',
      title: 'Inauguration Ceremony',
      tagline: 'Where ideas ignite and Entropy begins',
      desc: 'Kickstart Entropy 2025 with an inspiring opening ceremony — featuring special guests, mesmerizing performances, and the grand reveal of this year’s theme!',
      venue: 'Town Hall',
      date: '25th Oct'
    },
    {
      image: 'Robo.webp',
      pos: '50% 60%',
      icon: 'fa7-solid:robot',
      title: 'Robo Sangraam',
      tagline: 'Where metal meets might!',
      desc: 'Watch bots clash in a thrilling test of design, power, and control! The ultimate arena where only the toughest robots survive and emerge victorious.',
      venue: 'Town Hall',
      date: '26th Oct'
    },
    {
      image: 'Protocol1.webp',
      icon: 'mdi:radar',
      title: 'Protocol Breach',
      tagline: 'Decode. Run. Conquer.',
      desc: 'Embark on a campus-wide cyber hunt filled with riddles, clues, and hidden codes! Only the fastest and smartest code hunters will crack the final riddle and reach the finish line first.',
      venue: 'Lecture Gallery',
      date: '25th Oct'
    },
    {
      image: 'esports.png',
      pos: '50% 40%',
      icon: 'fa6-solid:vr-cardboard',
      title: 'FIFA Tournament',
      tagline: 'Where virtual meets victory!',
      desc: 'Step onto the digital pitch and battle it out in FIFA — where precision, strategy, and passion define the ultimate gamer. Compete, score, and celebrate your victory!',
      venue: 'Town Hall',
      date: '26th Oct'
    },
    {
      image: 'CodeBaazar.webp',
      icon: 'material-symbols:code-rounded',
      title: 'Code Baazar',
      tagline: 'Buy. Sell. Trade your code skills!',
      desc: 'Step into a coding marketplace full of creative challenges, quirky tasks, and quick problem-solving battles. A fun, fast-paced event where logic meets laughter!',
      venue: 'Lecture Gallery',
      date: '25th Oct'
    },
    {
      image: 'TechQuiz.webp',
      pos: '50% 45%',
      icon: 'mdi:brain',
      title: 'Tech Quiz',
      tagline: 'Test your tech IQ!',
      desc: 'From AI to algorithms, from gadgets to geniuses — challenge your brain in the ultimate quiz of wit and wisdom. Only the sharpest minds will prevail!',
      venue: 'Lecture Gallery',
      date: '25th Oct'
    },
    {
      image: 'Event3.png',
      pos: '50% 55%',
      icon: 'mdi:shield-lock',
      title: 'Cyber Security Quiz',
      tagline: 'Think like a hacker, act like a defender.',
      desc: 'Dive into the world of cyber threats, cryptography, and digital defense. Prove your cyber awareness and claim the title of ultimate security guru!',
      venue: 'Lecture Gallery',
      date: '25th Oct'
    },
  ];


  const [visibleSlides, setVisibleSlides] = useState(1);
  const totalSlides = SlideData.length;
  const cloneCount = visibleSlides;
  const intervalRef = useRef();
  const [counter, setCounter] = useState(cloneCount);
  const [transitioning, setTransitioning] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(3);
  const [slideWidth, setSlideWidth] = useState(30);
  const [shift, setShift] = useState(17);

  const extendedSlides = useMemo(() => {
    return [
      ...SlideData.slice(-visibleSlides),
      ...SlideData,
      ...SlideData.slice(0, visibleSlides),
    ];
  }, [visibleSlides]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlideWidth(84);
        setShift(8);
      } else {
        setSlideWidth(80);
        setShift(10);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(cloneCount);
  }, [cloneCount]);

  const jumpSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setCounter(slideIndex - cloneCount + 1);
  };

  const swipeLeft = () => {
    setCurrentIndex((prev) => prev - 1);
    setTransitioning(true);
    setCounter((count) => {
      if (count === 1) {
        return totalSlides;
      } else {
        return count - 1;
      }
    })
  };



  const swipeRight = () => {
    setCurrentIndex((next) => next + 1);
    setTransitioning(true);
    setCounter((count) => {
      if (count === totalSlides) {
        return 1;
      } else {
        return count + 1;
      }
    })
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      swipeRight();
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalSlides + cloneCount) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(cloneCount);
      }, 300);
    } else if (currentIndex < cloneCount) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(totalSlides + cloneCount - 1);
      }, 300);
    }
  };


  const transformStyle = {
    transform: `translateX(-${slideWidth * currentIndex - shift}%)`,
    transition: transitioning ? 'transform 0.5s ease' : 'none',
  };

  const scaleStyle = {
    transform: `scale(${1.15})`,
    transition: transitioning ? 'all 0.2s ease' : 'none',
    padding: '0 25px',
    zIndex: 2,
  };

  const opacityStyle = {
    opacity: 1,
    transition: transitioning ? 'transform 0.5s ease' : 'none',
  }

  const translateStyleDown = {
    opacity: 1,
    transform: `translateY(-50%)`,
    transition: transitioning ? 'transform 0.7s ease' : 'none',
  };
  const translateStyleUp = {
    opacity: 1,
    transform: `translateY(25px)`,
    transition: transitioning ? 'transform 0.7s ease' : 'none',
  };


  return (
    <>
      <div className="ev-carousel">
        <div className="ev-carousel-wrapper"
          style={transformStyle}
          onTransitionEnd={handleTransitionEnd}>

          {
            extendedSlides.map((slide, index) => {
              return (
                <div className="ev-slide-wrap" key={index} style={index === currentIndex ? scaleStyle : {}}>
                  <div className="ev-slide" style={index === currentIndex ? opacityStyle : {}}>
                    <div className="ev-slide-banner">
                      <div className="slide-image">
                        <img style={{ objectPosition: slide.pos }} src={imgPath(slide.image)} alt="Home-img" />
                      </div>
                    </div>
                    <div className="ev-slide-data">
                      <div className="ev-slide-float" style={index === currentIndex ? translateStyleDown : {}}>
                        <div className="ev-slide-icon">
                          <Icon icon={slide.icon} />
                        </div>
                        <div className="ev-slide-head">
                          <h3 className='ev-slide-title'>{slide.title}</h3>
                          <h4 className='ev-slide-subhead'>{slide.tagline}</h4>
                        </div>
                      </div>
                      <div className="ev-slide-float2" style={index === currentIndex ? translateStyleUp : {}}>
                        <p className='ev-slide-des'>{slide.desc}
                        </p>
                        <div className="ev-slide-info">
                          <div className='ev-venue'>
                            <span>
                              <Icon icon="material-symbols:location-on" />
                            </span> {slide.venue}</div>
                          <div className='ev-time'>
                            <span>
                              <Icon icon="material-symbols:calendar-month" />
                            </span> {slide.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="ev-controls">
          <div className="prev" onClick={() => {
            swipeLeft();
            resetAutoSlide();
          }}>
            <Icon icon='fa-solid:angle-left' />
          </div>
          <div className="next" onClick={() => {
            swipeRight();
            resetAutoSlide();
          }}>
            <Icon icon='fa-solid:angle-right' />
          </div>
        </div>
      </div>


      <div className="ev-slider-helper">
        <div className="ev-slider-dots">
          {SlideData.map((_, idx) => (
            <div
              key={idx}
              className={`ev-dot ${idx === (currentIndex - cloneCount + totalSlides) % totalSlides ? 'ev-active' : ''}`}
              onClick={() => { jumpSlide(idx + cloneCount); resetAutoSlide(); }}
            ></div>
          ))}
        </div>
        <div className="ev-slide-counter">
          <span className='ev-count'>{counter}</span>
          <span> / </span>
          <span className='total-slides'>{totalSlides}</span>
        </div>

      </div>

    </>
  )
}

export default EventCarousel