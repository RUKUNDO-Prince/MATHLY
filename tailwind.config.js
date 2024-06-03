/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkgray: {
          "100": "#a1a1a1",
          "200": "rgba(161, 161, 161, 0.9)",
        },
        gold: "#fad201",
        goldenrod: {
          "100": "#e3c138",
          "200": "#c79e00",
        },
        gray: {
          "100": "#252525",
          "200": "#17161a",
          "300": "rgba(0, 0, 0, 0.5)",
          "400": "rgba(0, 0, 0, 0.2)",
          "500": "rgba(0, 0, 0, 0.7)",
          "600": "rgba(0, 0, 0, 0.6)",
        },
        black: "#000",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.6)",
        },
        wheat: "#e9dfb8",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        biryani: "Biryani",
      },
      borderRadius: {
        "21xl": "40px",
        xl: "20px",
        mini: "15px",
        "35xl": "54px",
        "6xs": "7px",
        "12xs": "1px",
        "11xl": "30px",
        mid: "17px",
        "16xl": "35px",
      },
    },
    fontSize: {
      "6xl": "1.563rem",
      xl: "1.25rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      base: "1rem",
      "7xl": "1.625rem",
      "2xl": "1.313rem",
      lgi: "1.188rem",
      "4xl": "1.438rem",
      "36xl": "3.438rem",
      "14xl": "2.063rem",
      "25xl": "2.75rem",
      "13xl": "2rem",
      "11xl": "1.875rem",
      "5xl": "1.5rem",
      "34xl": "3.313rem",
      "23xl": "2.625rem",
      "16xl": "2.188rem",
      "9xl": "1.75rem",
      "6xs": "0.438rem",
      "xs-5": "0.719rem",
      smi: "0.813rem",
      "5xs": "0.5rem",
      "21xl": "2.5rem",
      mini: "0.938rem",
      mid: "1.063rem",
      "31xl": "3.125rem",
      "19xl": "2.375rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
