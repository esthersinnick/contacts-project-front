module.exports = {
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      colors: {
        primary: {
          "100": "#eef3f9",
          "300": "#bab5ff",
          "500": "#968fff",
          "900": "#25272b"
        },
        customRed: "#f7475e",
        customRed300: "#ffabb6"
      },
      fontSize: {
        xxs: ".25rem",
        xs: ".5rem",
        sm: ".75rem",
        tiny: ".875rem",
        "7xl": "5rem"
      },
      width: {
        fit: "fit-content"
      },
      borderWidth: {
        "1": "1px"
      },
      inset: {
        "1/2": "50%"
      },
      zIndex: {
        "100": 100
      }
    }
  },
  variants: {
    backgroundColor: ["disabled", "hover"]
  },
  plugins: []
};