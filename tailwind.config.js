/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-base": "#3498db",
                "primary-light": "#5dade2",
                "primary-dark": "#2c81ba",
                "neutral-background": "#f7f9fa",
                "neutral-textPrimary": "#2c3e50",
                "neutral-textSecondary": "#7f8c8d",
                "neutral-divider": "#dcdfe1",
                "status-success": "#27ae60",
                "status-warning": "#f39c12",
                "status-danger": "#e74c3c",
                "status-info": "#2980b9",
                "statusText-success": "#1d8b4d",
                "statusText-warning": "#c87f07",
                "statusText-danger": "#c0392b",
                "statusText-info": "#21618c",
                "accent-base": "#8e44ad",
                "accent-light": "#9b59b6"
            }
            ,
        },
    },
    plugins: [],
};
