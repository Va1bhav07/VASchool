import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Importing the slim package

import "./particle.css";

const Part = () => {
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
    console.log("particlesLoaded", container);
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
          type: "circle",
        },
        number: {
          // density: {
          //   enable: true,
          //   area: 1,
          // },
          limit: 200,
          value: 150,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
        },
        links: {
          enable: true,
          distance: 40,
          opacity: 0.5,
          width: 1,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
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
        id={"tsparticles"}
        className="w-100 h-100 bg-brand-background"
        init={particlesLoaded}
        options={options}
      />
    )
  );
};

export default Part;
