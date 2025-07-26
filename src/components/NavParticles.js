import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const NavParticles = () => {
  const [init, setInit] = useState(false);
  const [count, setCount] = useState(60);

  useEffect(() => {
    const computeParticles = () => {
      const num = Math.floor(window.innerWidth * window.innerHeight / 1000);
      setCount(num);
    };
    computeParticles();
    window.addEventListener("resize", computeParticles);

    initParticlesEngine(async (engine) => {
      try {
        await loadSlim(engine);
        setInit(true);
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
        value: ["#5ae4ffff", "#99f5ffff", "#46F0F1"]
      },
      shape: {
        type: ["circle", "blur-circle"],
        options: {
          blur: {
            value: 1
          }
        }
      },
      opacity: {
        value: { min: 0.2, max: 0.4 },
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.2,
          sync: false
        }
      },
      size: {
        value: { min: 2, max: 10 },
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.5,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 100,
        color: "#3a86ff",
        opacity: 0.3,
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
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
          mode: [ "bubble" , "repulse" ]
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
          size: 6,
          duration: 2,
          opacity: 0.6,
          speed: 5
        },
        attract: {
          enable: true
        },
        push: {
          quantity: 2
        },
        repulse: {
          distance: 50,
          duration: 0.4
        }
      }
    },
    retina_detect: true,
  };

  if (!init) return <div></div>;

  return (
    <Particles
      id="navParticles"
      options={options}
    />
  );
};

export default NavParticles;