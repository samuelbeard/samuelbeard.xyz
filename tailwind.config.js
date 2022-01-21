const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
        // require("tailwind-scrollbar"),
        // require("tailwind-scrollbar-hide"),
    ],
}
