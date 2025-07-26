import { useCallback } from 'react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const EntropyParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="entropy-particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0b0f24" },
        particles: {
          number: { value: 100, density: { enable: true, area: 1200 } },
          color: { value: ["#00f5d4", "#3a86ff", "#90e0ef"] },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.2, max: 0.5 },
            animation: { enable: true, speed: 0.3, minimumValue: 0.1 },
          },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: "bounce",
            random: true,
            straight: false,
          },
          links: { enable: false },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default EntropyParticles;


// import { useCallback } from 'react';
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const ParticleBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   const options = {
//     fullScreen: {
//       enable: true,
//       zIndex: -1
//     },
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           area: 800
//         }
//       },
//       color: {
//         value: ["#FF5A86", "#953AFE", "#FFC326", "#46F0F1"]
//       },
//       shape: {
//         type: "circle",
//         stroke: {
//           width: 0,
//           color: "#000000"
//         }
//       },
//       opacity: {
//         value: 0.5,
//         random: true,
//         anim: {
//           enable: true,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false
//         }
//       },
//       size: {
//         value: { min: 1, max: 3 },
//         random: true,
//         anim: {
//           enable: true,
//           speed: 2,
//           size_min: 0.1,
//           sync: false
//         }
//       },
//       links: {
//         enable: true,
//         distance: 150,
//         color: "#FFFFFF",
//         opacity: 0.4,
//         width: 1,
//         triangles: {
//           enable: true,
//           color: "#ffffff",
//           opacity: 0.1
//         }
//       },
//       move: {
//         enable: true,
//         speed: 1,
//         direction: "none",
//         random: true,
//         straight: false,
//         outModes: {
//           default: "bounce"
//         },
//         attract: {
//           enable: true,
//           rotateX: 600,
//           rotateY: 1200
//         }
//       }
//     },
//     interactivity: {
//       events: {
//         onHover: {
//           enable: true,
//           mode: "bubble",
//           parallax: {
//             enable: true,
//             force: 60,
//             smooth: 10
//           }
//         },
//         onClick: {
//           enable: true,
//           mode: "push"
//         },
//         resize: true
//       },
//       modes: {
//         bubble: {
//           distance: 200,
//           size: 10,
//           duration: 2,
//           opacity: 0.8,
//           speed: 2
//         },
//         push: {
//           quantity: 4
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4
//         }
//       }
//     },
//     retina_detect: true,
//     background: {
//       color: "#0d0d2b"
//     }
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={options}
//     />
//   );
// };

// export default ParticleBackground;