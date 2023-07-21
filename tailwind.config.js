const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
                display: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                50: "repeat(50, minmax(0, 1fr))",
            },
            colors: {
                // Red
                red: "#e0285c",
                // Pink
                pink: "#e5265c",
                "light-pink": "#e7708d",
                "pale-pink": "#ffeaf1",
                // Green
                green: "#465e44",
                "light-green": "#71c39b",
                "pale-green": "#e7f7ed",
                // Yellow
                yellow: "#ffa12b",
                "light-yellow": "#fdc218",
                "pale-yellow": "#fefaef",
                // Blue
                "dark-blue": "#282a3f",
                // Black / White
                white: "#fcfefb",
                black: "#1e1e1e",
            },
            boxShadow: {
                solid: "3px 3px 0 0 white",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 200ms ease-in-out",
            },
        },
    },
}
