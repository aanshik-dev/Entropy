import { useState, useEffect, useRef } from 'react';
import './EventCarousel.css'
import { Icon } from '@iconify/react/dist/iconify.js';
import { imgPath } from '../../utils/utilityFunctions'


const EventCarousel = () => {



  const SlideData = [
    {
      image: 'HomeDes.png',
      icon: 'material-symbols:rocket-launch-rounded',
      title: 'Inauguration Ceremony',
      tagline: 'Where ideas ignite and Entropy begins',
      desc: 'Begin the journey of Entropy 2025 with a spectacular Inauguration—honoring special guests, unveiling the theme, and electrifying performances.',
      venue: 'Town Hall',
      date: '10:00 AM'
    },
    {
      image: 'Event2.png',
      icon: 'fa6-solid:vr-cardboard',
      title: 'AI Showdown',
      tagline: 'Where ideas ignite and Entropy begins',
      desc: 'Begin the journey of Entropy 2025 with a spectacular Inauguration—honoring special guests, unveiling the theme, and electrifying performances.',
      venue: 'Town Hall',
      date: '10:00 AM'
    },
    {
      image: 'Event3.png',
      icon: 'fa7-solid:robot',
      title: 'AI Showdown',
      tagline: 'Where ideas ignite and Entropy begins',
      desc: 'Begin the journey of Entropy 2025 with a spectacular Inauguration—honoring special guests, unveiling the theme, and electrifying performances.',
      venue: 'Town Hall',
      date: '10:00 AM'
    },
    {
      image: 'Event4.png',
      icon: 'fa7-solid:robot',
      title: 'AI Showdown',
      tagline: 'Where ideas ignite and Entropy begins',
      desc: 'Begin the journey of Entropy 2025 with a spectacular Inauguration—honoring special guests, unveiling the theme, and electrifying performances.',
      venue: 'Town Hall',
      date: '10:00 AM'
    },
    {
      image: 'Event5.png',
      icon: 'material-symbols:rocket-launch-rounded',
      title: 'AI Showdown',
      tagline: 'Where ideas ignite and Entropy begins',
      desc: 'Begin the journey of Entropy 2025 with a spectacular Inauguration—honoring special guests, unveiling the theme, and electrifying performances.',
      venue: 'Town Hall',
      date: '10:00 AM'
    },
    {
      image: 'Event5.png',
      icon: 'material-symbols:rocket-launch-rounded',
      title: 'AI Showdown',
      tagline: 'Where ideas ignite and Entropy begins',
      desc: 'Begin the journey of Entropy 2025 with a spectacular Inauguration—honoring special guests, unveiling the theme, and electrifying performances.',
      venue: 'Town Hall',
      date: '10:00 AM'
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


  const extendedSlides = [
    ...SlideData.slice(-visibleSlides),
    ...SlideData,
    ...SlideData.slice(0, visibleSlides),
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
        setSlideWidth(90);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
        setSlideWidth(45);
      } else {
        setVisibleSlides(3);
        setSlideWidth(30);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex])


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
    transform: `translateX(-${80 * currentIndex - 10}%)`,
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
    transform: `translateY(-40px)`,
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
                        <img src={imgPath(slide.image)} alt="Home-img" />
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