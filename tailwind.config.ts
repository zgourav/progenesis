

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
        "./src/app/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                primary: "var(--font-manrope)",
            },
            screens: {
                csLg: '1100px',
                xsm: '350px',
            },
        },
    },
    plugins: [],
};
