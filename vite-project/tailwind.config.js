/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-780": { max: "780px" }, // 740px altı için özel sınıf
        "max-1024": { max: "1024px" }, // 1024px altı için özel sınıf
      },
      keyframes: {
        "shake-horizontal": {
          "0%, 90%": { transform: " skew(5deg) scale(1, 1.2)" },
          "10%, 30%, 50%, 70%": {
            transform: "skew(-5deg) scale(1, 1.2)",
          },
          "20%, 40%, 60%": { transform: "skew(5deg) scale(1, 1.2)" },
          "80%": { transform: "  scale(1, 1.2)" },
          "90%": { transform: " scale(1, 1.2)" },
        },
        fontFamily: {
          light: ["light", "sans-serif"],
          regular: ["regular", "sans"],
          glory: ["glory", "sans"],
          bold: ["bold", "sans"],
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 1 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-100%)", opacity: 1 },
        },
      },
    },
    animation: {
      "shake-horizontal":
        "shake-horizontal 1.5s cubic-bezier(0.155, 0.030, 0.900, 0.900) 1 both",
      slideInLeft: "slideInLeft 0.5s ease-out forwards",
      slideOutLeft: "slideOutLeft 0.5s ease-out forwards",
    },
  },
};
