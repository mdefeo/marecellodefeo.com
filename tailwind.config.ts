import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile-gradient': 'linear-gradient(to bottom, #7b886b, #849175, #8d9a7e, #96a388, #9fac92, #a6b399, #aeb9a0, #b5c0a7, #bbc6ad, #c2cdb3, #c8d3ba, #cfdac0)',
        'profile-gradient-hover': 'linear-gradient(to bottom, #29344e, #2e3a56, #33405e, #384667, #3d4c6f, #425378, #475b82, #4c628b, #526c97, #5777a3, #5d81af, #628cbb)',

      },
      animation: {
        "image-perspective": "transformPerspective 1s ease-out .5s 1 forwards",
        "circle-pulse": "circlePulse 12s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      keyframes: {
        transformPerspective: {
          "0%": { transform: "perspective(1800px) rotateY(90deg)", opacity: "0" },
          "100%": { transform: "none", opacity: "1" },
        },
        circlePulse: {
          "0%": { 
            transform: "scale(2) translate(0, 0) rotate(0deg) rotateX(0deg) rotateY(0deg)", 
            opacity: ".1", 
          },
          "10%": { 
            transform: "scale(2.1) translate(5px, 5px) rotate(30deg) rotateX(5deg) rotateY(5deg)", 
            opacity: ".2", 
          },
          "20%": { 
            transform: "scale(2.2) translate(10px, 5px) rotate(60deg) rotateX(10deg) rotateY(5deg)", 
            opacity: ".3", 
          },
          "25%": { 
            transform: "scale(2.5) translate(15px, 10px) rotate(90deg) rotateX(20deg) rotateY(10deg)", 
            opacity: ".3", 
          },
          "35%": { 
            transform: "scale(2.8) translate(18px, 12px) rotate(120deg) rotateX(25deg) rotateY(15deg)", 
            opacity: ".4", 
          },
          "50%": { 
            transform: "scale(3) translate(20px, 20px) rotate(180deg) rotateX(40deg) rotateY(20deg)", 
            opacity: ".1", 
          },
          "65%": { 
            transform: "scale(2.8) translate(18px, 12px) rotate(240deg) rotateX(30deg) rotateY(15deg)", 
            opacity: ".4", 
          },
          "75%": { 
            transform: "scale(2.5) translate(15px, -10px) rotate(270deg) rotateX(30deg) rotateY(-20deg)", 
            opacity: ".5", 
          },
          "85%": { 
            transform: "scale(2.2) translate(10px, -5px) rotate(300deg) rotateX(20deg) rotateY(-10deg)", 
            opacity: ".5", 
          },
          "100%": { 
            transform: "scale(2) translate(0, 0) rotate(360deg) rotateX(0deg) rotateY(0deg)", 
            opacity: ".3", 
          },
          "110%": { 
            transform: "scale(2) translate(-15px, 0) rotate(450deg) rotateX(0deg) rotateY(0deg)", 
            opacity: ".3", 
          },
          "125%": { 
            transform: "scale(2.5) translate(-20px, 10px) rotate(540deg) rotateX(20deg) rotateY(10deg)", 
            opacity: ".5", 
          },
          "150%": { 
            transform: "scale(3) translate(-25px, 20px) rotate(630deg) rotateX(40deg) rotateY(20deg)", 
            opacity: ".1", 
          },
          "175%": { 
            transform: "scale(2.8) translate(-18px, 12px) rotate(720deg) rotateX(25deg) rotateY(15deg)", 
            opacity: ".4", 
          },
          "200%": { 
            transform: "scale(2.5) translate(-15px, 10px) rotate(810deg) rotateX(30deg) rotateY(-20deg)", 
            opacity: ".5", 
          },
          "225%": { 
            transform: "scale(2) translate(0, 0) rotate(900deg) rotateX(0deg) rotateY(0deg)", 
            opacity: ".3", 
          },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'nord', 
      'night',
      {
        'aTributeToSinclair': {
          primary: "#F5F2E9",
          "primary-content": "#29344E",
          secondary: "#D1CAB2",
          "secondary-content": "#44557B",
          accent: "#E1E3DE",
          "accent-content": "#6078AB",
          neutral: "#29344E",
          "neutral-content": "#CDCFC2",
          "base-100": "#CDCAC3",
          "base-200": "#A5A39D",
          "base-300": "#807D79",
          "base-content": "#3A3937",
          info: "#628CBB",
          "info-content": "#333C5E",
          success: "#7B886B", 
          "success-content": "#F3F2F0",
          warning: "#FDD673",
          "warning-content": "#F3F2F0",
          error: "#D03052",
          "error-content": "#F3F2F0",
        }
      },
    ],
  }
} satisfies Config;
