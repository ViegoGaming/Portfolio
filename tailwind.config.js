import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4ADE80', // lichtgroen
                    DEFAULT: '#22C55E', // groen
                    dark: '#15803D', // donkergroen
                },
                secondary: {
                    light: '#38BDF8', // lichtblauw
                    DEFAULT: '#0EA5E9', // blauw
                    dark: '#0369A1', // donkerblauw
                },
                accent: {
                    light: '#F472B6', // roze
                    DEFAULT: '#EC4899', // felroze
                    dark: '#DB2777', // donkerroze
                },
                background: '#F3F4F6', // lichtgrijze achtergrondkleur
                foreground: '#111827', // donkere tekstkleur
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                heading: ['Poppins', 'sans-serif'],
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                vibrant: '0 10px 20px rgba(56, 189, 248, 0.5)',
            },
            transitionTimingFunction: {
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
            },
        },
    },

    plugins: [forms],
};
