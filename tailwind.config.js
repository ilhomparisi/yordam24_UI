/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#777",
          "200": "rgba(0, 0, 0, 0.2)",
        },
        black: "#000",
        deepskyblue: "rgba(11, 174, 242, 0)",
        darkslategray: "#383838",
        springgreen: "#00ff61",
        firebrick: "#c72525",
      },
      spacing: {},
      fontFamily: {
        verdana: "Verdana",
        sansation: "Sansation",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      xs: "12px",
      "7xs": "6px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
