import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    theme: {
        extend: {
            colors: {
                primary: "#1e3a8a", // indigo-900
            },
            fontFamily: {
                heading: ["Montserrat", "sans-serif"],
                body: ["Nunito", "sans-serif"],
            },
        },
    },
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
});
