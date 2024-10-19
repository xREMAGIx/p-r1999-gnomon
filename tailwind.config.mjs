/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mineral: "#8D6838",
        star: "#4D719A",
        plant: "#418D51",
        beast: "#B25859",
        spirit: "#814886",
        intellect: "#9E8D4D",

        paper: "#f7ebe7",
        ["line-paper"]: "#c3b7a0",

        attack: "#B25859",
        buff: "#4D719A",
        effect: "#4D719A",

        highlight: "#db6f39",
        gray: "#808080",

        common: "#617594",
        rare: '#623583',
        epic: '#d3c47c',

        syntony: "#597463",
        abundance: "#9f844d",
        craft: "#58537b",
        ritual: "#572530",
        ['extra-action']: "#795e4b",
        resonance: "#5f7281",
        voltaic: "#838554",
        support: "#848887"
      },
      gridTemplateColumns: {
        filter: "auto 1fr",
      },
    },
  },
  daisyui: {
    themes: [
      {
        r1999: {
          primary: "#db6f39",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#000000",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",

          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--rounded-box": "0",
          "primary-content": "#bba893",
          "base-content": "#e9dccd",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
