/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "gradient-left": "rgb(0, 9, 128)",
                "gradient-right": "rgb(0, 88, 230)"
            }
        },
    },
    plugins: [],
};
