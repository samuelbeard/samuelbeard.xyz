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
                sans: ["Exo", ...defaultTheme.fontFamily.sans],
                serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
                display: ["Chakra Petch", ...defaultTheme.fontFamily.sans],
            },
        },
    },
}
