/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framwork/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/**/*.{ts,tsx,jsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            aspectRatio: {
                "4/3": "4 / 3",
                "3/4": "3 / 4",
            },
        },
    },
    plugins: [],
};
