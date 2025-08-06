import { useState, useEffect, useRef } from 'react';
import './Carousel.css'
import { Icon } from '@iconify/react/dist/iconify.js';


const Carousel = () => {



  const SlideData = [
    {
      icon: 'fa7-solid:robot',
      title: 'AI Showdown',
      desc: 'Pit your AI models against others in this thrilling competition.Solve real- world problems using artificial intelligence and machine learning.',
      tag: 'Day 1',
      data: '10:00 AM',
      button: 'Register Now'
    },
    {
      icon: 'fa6-solid:vr-cardboard',
      title: 'Gaming Tournament',
      desc: 'Step into the quantum realm with our immersive VR experience. Visualize quantum phenomena and interact with quantum particles in virtual reality.',
      tag: 'Day 2',
      data: '09:00 AM',
      button: 'Register Now'
    },
    {
      icon: 'uil:processor',
      title: 'Quantum Computing Workshop',
      desc: 'Learn the fundamentals of quantum computing and how it can revolutionize the world of technology.',
      tag: 'Day 3',
      data: '10:00 AM',
      button: 'Book a Seat'
    },
    {
      icon: 'ion:radio',
      title: 'Quantum Radio',
      desc: 'Experience the power of quantum radio and uncover hidden signals in the noise.',
      tag: 'Day 4',
      data: '09:00 AM',
      button: 'Register Now'
    },
    {
      icon: 'ion:radio',
      title: 'Quantum Radio 2',
      desc: 'Advanced techniques in quantum radio signal processing.',
      tag: 'Day 5',
      data: '11:00 AM',
      button: 'Register Now'
    },
    {
      icon: 'ion:radio',
      title: 'Quantum Radio 2',
      desc: 'Advanced techniques in quantum radio signal processing.',
      tag: 'Day 6',
      data: '11:00 AM',
      button: 'Register Now'
    }


  ];
  const totalSlides = SlideData.length;
  const cloneCount = 3;
  const intervalRef = useRef();

  const [visibleSlides, setVisibleSlides] = useState(3);
  const [counter, setCounter] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(cloneCount);

  const [slideWidth, setSlideWidth] = useState(30);

  const extendedSlides = [
    ...SlideData.slice(-visibleSlides),
    ...SlideData,
    ...SlideData.slice(0, visibleSlides),
  ]

  //    3 4 5 1 2 3 4 5 1 2 3

  // Handle window resize to adjust visible slides
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

  const handleTransitionEn = () => {
    if (currentIndex >= totalSlides + cloneCount) {
      setTransitioning(false);
      setCurrentIndex(cloneCount);
    } else if (currentIndex < cloneCount) {
      setTransitioning(false);
      setCurrentIndex(totalSlides + cloneCount - 1);
    }
  }

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
    transform: `translateX(-${-20 + 30 * currentIndex}%)`,
    transition: transitioning ? 'transform 0.5s ease' : 'none',
  };

  const scaleStyle = {
    transform: `scale(${1.1}) translateY(-15px)`,
    transition: transitioning ? 'transform 0.2s ease' : 'none',
  };


  return (
    <>
      <div className="carousel-container">
        <div className="carousel-wrapper"
          style={transformStyle}
          onTransitionEnd={handleTransitionEnd}>

          {
            extendedSlides.map((slide, index) => (
              <div className="slide-wrap" key={index} style={index === currentIndex && (index !== 11) ? scaleStyle : {}}>
                <div className="h-slide">
                  <div className="slide-iwrap">
                    <div className="h-slide-icon">
                      <Icon icon={slide.icon} />
                    </div>
                  </div>
                  <div className="slide-title">{slide.title}</div>
                  <div className="slide-desc">{slide.desc}</div>
                  <div className="slide-data">
                    <div className="slide-info">{slide.data}</div>
                    <div className="slide-tag">
                      <span> {slide.tag} </span>
                    </div>
                  </div>
                  <div className="slide-button">{slide.button}</div>
                </div>
              </div>

            ))
          }

          {/* <div className="slide-wrap">
            <div className="h-slide">
              <div className="slide-iwrap">
                <div className="h-slide-icon">
                  <Icon icon='fa7-solid:robot' />
                </div>
              </div>
              <div className="slide-title">AI Showdown</div>
              <div className="slide-desc">Pit your AI models against others in this thrilling competition.Solve real- world problems using artificial intelligence and machine learning.</div>
              <div className="slide-data">
                <div className="slide-info">10:00 AM</div>
                <div className="slide-tag">
                  <span> Day 1 </span>
                </div>
              </div>
              <div className="slide-button">Register Now</div>
            </div>
          </div> */}

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
      </div>

      <div className="slider-helper">
        <div className="slider-dots">

          {SlideData.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === (currentIndex - cloneCount + totalSlides) % totalSlides ? 'active' : ''}`}
              onClick={() => { jumpSlide(idx + cloneCount); resetAutoSlide(); }}
            ></div>
          ))}
        </div>
        <div className="all-events-btn">
          <span>View All Events  {currentIndex}</span>
          <span><Icon icon='solar:double-alt-arrow-right-line-duotone' /></span>
        </div>

        <div className="slide-counter">
          <span>{counter}</span>
          <span>/</span>
          <span>{totalSlides}</span>
        </div>
      </div>

    </>
  )
}

export default Carousel







// import { useState, useEffect } from 'react';
// import './Carousel.css';
// import { Icon } from '@iconify/react/dist/iconify.js';

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleSlides, setVisibleSlides] = useState(3);
//   const [slideWidth, setSlideWidth] = useState(30); // percentage

//   const SlideData = [
//     {
//       id: 1,
//       logo: 'fa7-solid:robot',
//       title: 'AI Showdown',
//       desc: 'Pit your AI models against others in this thrilling competition. Solve real-world problems using artificial intelligence and machine learning.',
//       tag: 'Day 1',
//       data: '10:00 AM',
//       button: 'Register Now'
//     },
//     {
//       id: 2,
//       logo: 'fa6-solid:vr-cardboard',
//       title: 'Gaming Tournament',
//       desc: 'Step into the quantum realm with our immersive VR experience. Visualize quantum phenomena and interact with quantum particles in virtual reality.',
//       tag: 'Day 2',
//       data: '09:00 AM',
//       button: 'Register Now'
//     },
//     {
//       id: 3,
//       logo: 'uil:processor',
//       title: 'Quantum Computing Workshop',
//       desc: 'Learn the fundamentals of quantum computing and how it can revolutionize the world of technology.',
//       tag: 'Day 3',
//       data: '10:00 AM',
//       button: 'Register Now'
//     },
//     {
//       id: 4,
//       logo: 'ion:radio',
//       title: 'Quantum Radio',
//       desc: 'Experience the power of quantum radio and uncover hidden signals in the noise.',
//       tag: 'Day 4',
//       data: '09:00 AM',
//       button: 'Register Now'
//     },
//     {
//       id: 5,
//       logo: 'ion:radio',
//       title: 'Quantum Radio 2',
//       desc: 'Advanced techniques in quantum radio signal processing.',
//       tag: 'Day 5',
//       data: '11:00 AM',
//       button: 'Register Now'
//     }
//   ];

//   // Handle window resize to adjust visible slides
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setVisibleSlides(1);
//         setSlideWidth(90);
//       } else if (window.innerWidth < 1024) {
//         setVisibleSlides(2);
//         setSlideWidth(45);
//       } else {
//         setVisibleSlides(3);
//         setSlideWidth(30);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const goToPrev = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? SlideData.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === SlideData.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   // Calculate which slides to display based on currentIndex
//   const getVisibleSlides = () => {
//     const slides = [];
//     for (let i = 0; i < visibleSlides; i++) {
//       const slideIndex = (currentIndex + i) % SlideData.length;
//       slides.push(SlideData[slideIndex]);
//     }
//     return slides;
//   };

//   return (
//     <>
//       <div className="carousel-container">
//         <div className="controls">
//           <div className="prev" onClick={goToPrev}>
//             <Icon icon='fa-solid:angle-left' />
//           </div>
//           <div className="next" onClick={goToNext}>
//             <Icon icon='fa-solid:angle-right' />
//           </div>
//         </div>
//         <div className="carousel-wrapper" style={{
//           transform: `translateX(-${currentIndex * slideWidth}%)`,
//           transition: 'transform 0.5s ease-in-out'
//         }}>
//           {SlideData.map((slide) => (
//             <div
//               className="slide-wrap"
//               key={slide.id}
//               style={{ width: `${slideWidth}%`, minWidth: `${slideWidth}%` }}
//             >
//               <div className="h-slide">
//                 <div className="slide-iwrap">
//                   <div className="h-slide-icon">
//                     <Icon icon={slide.logo} />
//                   </div>
//                 </div>
//                 <div className="slide-title">{slide.title}</div>
//                 <div className="slide-desc">{slide.desc}</div>
//                 <div className="slide-data">
//                   <div className="slide-info">{slide.data}</div>
//                   <div className="slide-tag">
//                     <span>{slide.tag}</span>
//                   </div>
//                 </div>
//                 <div className="slide-button">{slide.button}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="slider-helper">
//         <div className="slider-dots">
//           {SlideData.map((slide, slideIndex) => (
//             <div
//               key={slide.id}
//               className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
//               onClick={() => goToSlide(slideIndex)}
//             />
//           ))}
//         </div>
//         <div className="all-events-btn">
//           <span>View All Events</span>
//           <span><Icon icon='ic:baseline-double-arrow' /></span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Carousel;