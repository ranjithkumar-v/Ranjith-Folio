const config = {
    content: [
        "./index.html", // Include index.html to scan for classes in HTML files

        "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files inside src

        "./src/UI/**/*.{js,ts,jsx,tsx}", // Include JSX files inside the UI folder
        "./src/Contexts/**/*.{js,ts,jsx,tsx}", // Include JSX files inside the Contexts folder

        "./src/assets/**/*.{js,ts,jsx,tsx}",
        "./src/App.jsx"

    ],

    theme: {
        extend: {

            fontFamily: {

                kumbhSans: ["Kumbh Sans", "sans-serif"],

            },

            backgroundImage: {

                "image-radial":
                    "radial-gradient(circle, #E3D3BE 0%, #E3D6C5 74%, #DDCCB8 100%)",

                "icon-radial":

                    "radial-gradient(circle, rgba(217, 217, 217, 0.07) 0%, rgba(217, 217, 217, 0.19) 100%)",

                "translucent-gradient":

                    "linear-gradient(to-right, #d9d9d91f 0%, #7373731f 100%)",

                "gradient-conic":

                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

            },

            screens: {

                smm: "435px",

            },

        },

    },

    plugins: [],

};


export default config;