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
                "brand-red": "#d11141",
                "brand-green": "#00b159",
                "brand-blue": "#00aedb",
                "brand-orange": "#f37735",
                "brand-yellow": "#ffc425",
            },
        },
    },
}
