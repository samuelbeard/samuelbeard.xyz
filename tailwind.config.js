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
                "brand-red": "#e0285c",
                "brand-green": "#465e44",
                // "brand-blue": "#00aedb",
                // "brand-orange": "#f37735",
                "brand-yellow": "#ffa12b",
                "brand-dark-blue": "#282a3f",
                "brand-white": "#fcfefb",
                "brand-black": "#1e1e1e",
            },
            boxShadow: {
                solid: "3px 3px 0 0 white",
            },
        },
    },
}
