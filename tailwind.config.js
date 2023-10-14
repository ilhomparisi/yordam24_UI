/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        springgreen: "#00ff61",
        firebrick: "#c72525",
        gray: {
          "100": "#777",
          "200": "rgba(0, 0, 0, 0.2)",
        },
        deepskyblue: "rgba(11, 174, 242, 0)",
        mediumspringgreen: "#2fcd6b",
        darkslategray: "#383838",
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
      sm: "14px",
      "7xs": "6px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
