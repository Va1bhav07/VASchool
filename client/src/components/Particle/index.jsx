import { useCallback, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // Importing the slim package

import './particle.css';

const Part = ({ id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim package
      // await loadFull(engine); // Load the slim package
    }).then(() => {
      setInit(true); // Set init to true once the engine is initialized
    });
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log('particlesLoaded', container);
  }, []);

  const options = useMemo(
    () => ({
      detectRetina: true,
      fpsLimit: 120,
      fullScreen: {
        enable: false,
        // zIndex: 1,
      },
      particles: {
        shape: {
          type: 'circle',
        },
        number: {
          // density: {
          //   enable: true,
          //   area: 1,
          // },
          limit: 200,
          value: 30,
        },
        move: {
          enable: true,
          speed: { min: 3, max: 7 },
        },
        links: {
          enable: true,
          distance: 200,
          opacity: 0.5,
          width: 1,
        },
        size: {
          value: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },

      // collisions: {
      //   enable: true,
      // },
    }),
    []
  );
  return (
    init && (
      <Particles
        id={id}
        className="w-100 h-100 bg-brand-background"
        init={particlesLoaded}
        options={options}
      />
    )
  );
};

export default Part;
