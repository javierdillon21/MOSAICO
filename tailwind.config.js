module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#A8A198",
      secondary: "#C5802A",
      third: "#2B2B2B",
      danger: "#e3342f",
    }),
    extend: {
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        primary: "#A8A198",
        secondary: "#ffed4a",
        danger: "#e3342f",
      }),
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        fullhd: "1920px",
        "2k": "2560px",
        "4k": "3840px",
      },
      brightness: {
        10: ".1",
        25: ".25",
        45: ".45",
        175: "1.75",
      },
      fontFamily: {
        title: ["Sen", "sans-serif"],
        raleway: ["Raleway"],
        poppins: ["Poppins"],
      },
      maxWidth: {
        "1/5": "20%",
        "1/3": "33%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "60p": "60%",
        "80p": "80%",
        "90p": "90%",
      },
      maxHeight: {
        "1/5": "20%",
        "1/3": "33%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "60p": "60%",
        "80p": "80%",
        "90p": "90%",
        navegationbar: "96px",
      },
      height: {
        navegationbar: "96px",
        socialmediabox: "27px",
        footer: "108px",
        portada: "850px",
        cardsxl: "700px",
        pl1: "1076px",
        pl1R: "600px",
        pl2: "950px",
        pl2R: "550px",
        pl3: "457px",
        miniatura: "200px",
        sm: "660px",
        "60p": "60%",
        "10p": "10%",
        "15p": "15%",
        "20p": "20%",
        "90p": "90%",
        "92p": "92%",
        "88p": "88%",
        card: "500px",
        cardsm: "400px",
      },
      width: {
        tabsbox: "600px",
        socialmediabox: "68px",
        cbservicios: "170px",
        "90p": "90%",
        "95p": "95%",
        "98p": "98%",
        "10p": "10%",
        "15p": "15%",
        "20p": "20%",
      },
      fontSize: {
        header: ["15px", "18px"],
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#A8A198",
        secondary: "#C5802A",
        third: "#2B2B2B",
        danger: "#e3342f",
      }),
      textColor: {
        primary: "#A8A198",
        secondary: "#C5802A",
        third: "#4C4945",
        danger: "#e3342f",
      },
      inset: {
        "1/5": "20%",
        "1/4": "25%",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "appear-progressive": {
          "0%": {
            opacity: "100",
            borderColor: "#fff",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      fill: ["hover", "focus"],
      strokeWidth: ["hover", "focus"],
      stroke: ["hover", "focus"],
      rotate: ["active", "group-hover"],
    },
  },
};
