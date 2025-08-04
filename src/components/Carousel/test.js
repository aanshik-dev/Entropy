import './Carousel.css';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';

const Carousel = () => {
  const SlideData = [
    {
      id: 1,
      logo: 'fa7-solid:robot',
      title: 'AI Showdown',
      desc: 'Pit your AI models against others in this thrilling competition.',
      tag: 'Day 1',
      data: '10:00 AM',
      button: 'Register Now',
    },
    {
      id: 2,
      logo: 'fa6-solid:vr-cardboard',
      title: 'Gaming Tournament',
      desc: 'Step into the quantum realm with our immersive VR experience.',
      tag: 'Day 2',
      data: '09:00 AM',
      button: 'Register Now',
    },
    {
      id: 3,
      logo: 'uil:processor',
      title: 'Quantum Computing Workshop',
      desc: 'Learn the fundamentals of quantum computing.',
      tag: 'Day 3',
      data: '10:00 AM',
      button: 'Register Now',
    },
    {
      id: 4,
      logo: 'ion:radio',
      title: 'Quantum Radio',
      desc: 'Experience the power of quantum radio.',
      tag: 'Day 4',
      data: '09:00 AM',
      button: 'Register Now',
    },
    {
      id: 5,
      logo: 'ion:radio',
      title: 'Quantum Radio',
      desc: 'Discover hidden signals in the noise.',
      tag: 'Day 5',
      data: '09:00 AM',
      button: 'Register Now',
    }
  ];

  const visibleSlides = 3;
  const cloneCount = visibleSlides;
  const totalSlides = SlideData.length;
  const extendedSlides = [
    ...SlideData.slice(-cloneCount),
    ...SlideData,
    ...SlideData.slice(0, cloneCount),
  ];

  const [currentIndex, setCurrentIndex] = useState(cloneCount);
  const [transitioning, setTransitioning] = useState(true);
  const wrapperRef = useRef();
  const intervalRef = useRef();

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setTransitioning(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    setTransitioning(true);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalSlides + cloneCount) {
      setTransitioning(false);
      setCurrentIndex(cloneCount);
    } else if (currentIndex < cloneCount) {
      setTransitioning(false);
      setCurrentIndex(totalSlides + cloneCount - 1);
    }
  };

  const transformStyle = {
    transform: `translateX(-${(100 / visibleSlides) * currentIndex}%)`,
    transition: transitioning ? 'transform 0.5s ease' : 'none',
    width: `${(extendedSlides.length * 100) / visibleSlides}%`,
  };

  return (
    <>
      <div className="carousel-container">
        <div className="controls">
          <div className="prev" onClick={() => { prevSlide(); resetAutoSlide(); }}>
            <Icon icon='fa-solid:angle-left' />
          </div>
          <div className="next" onClick={() => { nextSlide(); resetAutoSlide(); }}>
            <Icon icon='fa-solid:angle-right' />
          </div>
        </div>

        <div
          className="carousel-wrapper"
          ref={wrapperRef}
          style={transformStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div className="slide-wrap" key={index} style={{ flex: `0 0 ${100 / visibleSlides}%` }}>
              <div className="h-slide">
                <div className="slide-iwrap">
                  <div className="h-slide-icon">
                    <Icon icon={slide.logo} />
                  </div>
                </div>
                <div className="slide-title">{slide.title}</div>
                <div className="slide-desc">{slide.desc}</div>
                <div className="slide-data">
                  <div className="slide-info">{slide.data}</div>
                  <div className="slide-tag"><span>{slide.tag}</span></div>
                </div>
                <div className="slide-button">{slide.button}</div>
              </div>
            </div>
          ))
          }
        </div>
      </div>

      <div className="slider-helper">
        <div className="slider-dots">
          {SlideData.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === (currentIndex - cloneCount + totalSlides) % totalSlides ? 'active' : ''}`}
              onClick={() => { goToSlide(idx + cloneCount); resetAutoSlide(); }}
            ></div>
          ))}
        </div>
        <div className="all-events-btn">
          <span>View All Events</span>
          <span><Icon icon='ic:baseline-double-arrow' /></span>
        </div>
      </div>
    </>
  );
};

export default Carousel;
