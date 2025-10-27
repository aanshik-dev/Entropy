import { useState, useEffect, useRef, useMemo } from 'react';
import './Carousel.css'
import { Icon } from '@iconify/react/dist/iconify.js';


const Carousel = () => {

  const SlideData = [
    {
      icon: 'mdi:rocket-launch',
      iconBg: '#FFD700',
      iconColor: '#000000',
      title: 'Entropy 2025 Inauguration',
      headColor: '#FF1497',
      desc: 'Kickstart Entropy 2025 with a grand opening — witness the unveiling, guest appearances, and electrifying performances that set the stage for innovation.',
      tag: 'Day 1',
      data: '09:00 AM',
      dataColor: '#FFD700',
      button: 'Register Now'
    },
    {
      icon: 'fa6-solid:vr-cardboard',
      iconBg: '#a74affff',
      iconColor: '#FFFFFF',
      title: 'Protocol Breach',
      headColor: '#FFD700',
      desc: 'Dive into the virtual chaos! Test your reflexes and logic in this high-tech VR challenge full of puzzles and futuristic simulations.',
      tag: 'Day 2',
      data: '02:00 PM',
      dataColor: '#FF1493',
      button: 'Register Now'
    },
    {
      icon: 'fa7-solid:robot',
      iconBg: '#FFD700',
      iconColor: '#000000',
      title: 'Robo Sangraam',
      headColor: '#FF1497',
      desc: 'Witness the ultimate robot battle as powerful bots clash in an arena of engineering excellence and raw innovation.',
      tag: 'Day 2',
      data: '09:00 AM',
      dataColor: '#FFD700',
      button: 'Register Now'
    },
    {
      icon: 'uil:processor',
      iconBg: '#FF1493',
      iconColor: '#FFFFFF',
      title: 'Tech Quiz - Round 2',
      headColor: '#FFD700',
      desc: 'Challenge your tech IQ with questions spanning AI, robotics, and modern innovation — only the sharpest minds move ahead.',
      tag: 'Day 2',
      data: '12:00 PM',
      dataColor: '#FF1493',
      button: 'Book a Seat'
    },
    {
      icon: 'mdi:shield-lock',
      iconBg: '#FFD700',
      iconColor: '#000000',
      headColor: '#FF1493',
      title: 'Cybersecurity Quiz',
      desc: 'Test your ethical hacking instincts and outsmart digital threats in this thrilling cybersecurity knowledge face-off.',
      tag: 'Day 1',
      data: '02:00 PM',
      dataColor: '#FFD700',
      button: 'Register Now'
    },
    {
      icon: 'mdi:code-tags',
      iconBg: '#a74affff',
      iconColor: '#FFFFFF',
      title: 'Code Baazar',
      headColor: '#FFD700',
      desc: 'Showcase your coding skills, crack problem statements, and build creative software solutions in this coding carnival.',
      tag: 'Day 1',
      data: '03:00 PM',
      dataColor: '#FF1493',
      button: 'Register Now'
    },
    {
      icon: 'mdi:gamepad-variant',
      iconBg: '#FF1493',
      iconColor: '#FFFFFF',
      title: 'E-Sports Tournament',
      headColor: '#FFD700',
      desc: 'Battle it out in a high-energy gaming showdown — strategy, speed, and skill will decide the ultimate champion.',
      tag: 'Day 1',
      data: '05:00 PM',
      dataColor: '#FF1493',
      button: 'Register Now'
    }
  ];


  const [visibleSlides, setVisibleSlides] = useState(3);
  const totalSlides = SlideData.length;
  const cloneCount = visibleSlides;
  const intervalRef = useRef();
  const [counter, setCounter] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(cloneCount);

  const [slideWidth, setSlideWidth] = useState(33);
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
        setVisibleSlides(1);
        setSlideWidth(80);
        setShift(10);
      } else if (window.innerWidth < 768) {
        setVisibleSlides(1);
        setSlideWidth(60);
        setShift(13);
      } else if (window.innerWidth < 992) {
        setVisibleSlides(3);
        setSlideWidth(40);
        setShift(10);
      } else {
        setVisibleSlides(3);
        setSlideWidth(33);
        setShift(17);
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
    }, 3000);
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
      }, 200);
    } else if (currentIndex < cloneCount) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(totalSlides + cloneCount - 1);
      }, 200);
    }
  };


  const transformStyle = {
    transform: `translateX(-${-shift + slideWidth * currentIndex}%)`,
    transition: transitioning ? 'transform 0.5s ease' : 'none',
  };

  const scaleStyle = {
    transition: transitioning ? 'all 0.2s ease' : 'none',
  };


  const click = (e, page, sectionId = null) => {
    e.preventDefault();
    window.location.hash = page;
    if (sectionId) {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50)
    }
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-wrapper"
          style={transformStyle}
          onTransitionEnd={handleTransitionEnd}>
          {
            extendedSlides.map((slide, index) => (
              <div key={index} className={`slide-wrap ${index === currentIndex ? 'h-slide-active' : ''}`} style={index === currentIndex ? scaleStyle : {}}>
                <div className="h-slide">
                  <div className="slide-iwrap">
                    <div className="h-slide-icon" style={{ backgroundColor: slide.iconBg, color: slide.iconColor }}>
                      <Icon icon={slide.icon} />
                    </div>
                  </div>
                  <div className="slide-title" style={{ color: slide.headColor }}>
                    {slide.title}
                  </div>
                  <div className="slide-desc">{slide.desc}</div>
                  <div className="slide-data">
                    <div className="slide-info" style={{ color: slide.dataColor }}>{slide.data}</div>
                    <div className="slide-tag">
                      <span> {slide.tag} </span>
                    </div>
                  </div>
                  <div className="slide-button">{slide.button}</div>
                </div>
              </div>

            ))
          }

        </div>
        <div className="controls">
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
      </div >

      <div className="slider-helper">
        <div className="slide-counter">
          <span className='count'>{counter}</span>
          <span> / </span>
          <span className='total-slides'>{totalSlides}</span>
        </div>
        <div className="slider-dots">
          {SlideData.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === (currentIndex - cloneCount + totalSlides) % totalSlides ? 'active' : ''}`}
              onClick={() => { jumpSlide(idx + cloneCount); resetAutoSlide(); }}
            ></div>
          ))}

        </div>

        <div onClick={(e) => click(e, 'events', 'eventTimeline')} className="all-events-btn">
          <span>View All</span>
          <span><Icon icon='solar:double-alt-arrow-right-line-duotone' /></span>
        </div>

      </div>

    </>
  )
}

export default Carousel