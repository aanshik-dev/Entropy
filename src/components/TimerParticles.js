import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  const [count, setCount] = useState(60);

  useEffect(() => {
    const computeParticles = () => {
      const num = Math.floor((window.innerWidth * window.innerHeight) / 7000);
      setCount(num);
    };
    computeParticles();
    window.addEventListener("resize", computeParticles);

    initParticlesEngine(async (engine) => {
      try {
        await loadSlim(engine);
        setTimeout(() => {
          setInit(true);
        }, 50);
      } catch (error) {
        console.error("Particles initialization failed:", error);
      }
    });

    return () => window.removeEventListener("resize", computeParticles);
  }, []);

  const options = {
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    particles: {
      number: {
        value: count,
        density: {
          enable: true,
          area: 600
        },
      },
      collisions: {
        enable: true
      },
      color: {
        value: ["#c05affff", "#8400ffff", "#f1d446ff"]
      },
      shape: {
        type: ["circle"]
      },
      opacity: {
        value: { min: 0.1, max: 0.2 },
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: { min: 3, max: 10 },
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      links: {
        random: true,
        enable: true,
        distance: 90,
        color: ["#c500aeff", "#933affff", "#853affff"],
        opacity: 0.9,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "outside",
        random: true,
        straight: false,
        outMode: "wrap",
        bounds: {
          enable: true,
          mode: "wrap",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["bubble"],
          parallax: {
            enable: true,
            force: 50,
            smooth: 50
          }
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 200,
          size: 10,
          duration: 2,
          opacity: 0.8,
          speed: 2
        },
        attract: {
          enable: true
        },
        push: {
          quantity: 1
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    retina_detect: true,
  };

  if (!init) return <div></div>;

  return (
    <Particles
      id="tsparticles"
      options={options}
    />
  );
};

export default ParticleBackground;