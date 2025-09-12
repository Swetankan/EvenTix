// src/components/ParticlesBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground({ id = "tsparticles-hero" }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // keep inside parent
        background: { color: "transparent" },
        style: {
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none", // don't block clicks
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 180,
              links: { opacity: 0.6 },
            },
          },
        },
        particles: {
          number: { value: 70, density: { enable: true, area: 800 } },
          color: { value: "#3b62ffff" }, 
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 4 } },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff", // line color
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2.2,
            outModes: "out",
          },
        },
        detectRetina: true,
      }}
    />
  );
}
