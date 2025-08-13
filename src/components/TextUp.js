import React, { useState, useEffect } from "react";

export default function AnimatedText({ texts, intervalTime = 4000, animDuration = 500 }) {
  const [index, setIndex] = useState(0);
  const [style, setStyle] = useState({
    opacity: 0,
    transform: "translateY(50%)",
    transition: `opacity ${animDuration}ms ease, transform ${animDuration}ms ease`,
  });

  useEffect(() => {
    let timeoutFadeIn, timeoutFadeOut, interval;

    const animate = () => {
      // Fade In
      setStyle({
        opacity: 1,
        transform: "translateY(0%)",
        transition: `opacity ${animDuration}ms ease, transform ${animDuration}ms ease`,
      });

      // Fade Out before change
      timeoutFadeOut = setTimeout(() => {
        setStyle({
          opacity: 0,
          transform: "translateY(50%)",
          transition: `opacity ${animDuration}ms ease, transform ${animDuration}ms ease`,
        });
      }, intervalTime - animDuration); // start fading out before next text
    };

    animate(); // First animation

    interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      animate();
    }, intervalTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutFadeIn);
      clearTimeout(timeoutFadeOut);
    };
  }, [texts, intervalTime, animDuration]);

  return (
    <div style={style}>
      {texts[index]}
    </div>
  );
}
