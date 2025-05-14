
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan these files for Tailwind classes
  ],
  darkMode: 'class', // Or 'media' if you prefer OS-level dark mode detection
  theme: {
    extend: {
      // Define colors using HSL values from CSS custom properties
      // This allows Tailwind to generate utility classes like bg-primary, text-foreground, etc.
      colors: {
        background: 'hsl(var(--background-hsl) / <alpha-value>)',
        foreground: 'hsl(var(--foreground-hsl) / <alpha-value>)',
        card: 'hsl(var(--card-hsl) / <alpha-value>)',
        primary: { // Primary color with shades
          DEFAULT: 'hsl(var(--primary-hsl) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground-hsl) / <alpha-value>)',
        },
        border: 'hsl(var(--border-hsl) / <alpha-value>)',
      },
      // Define custom animations and their corresponding keyframes
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }, // Slightly more float
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' }, // More noticeable pulse
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(15px)' }, // Smoother entry
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        meteor: { // Detailed meteor animation
          '0%': {
            transform: 'rotate(215deg) translateX(0)', // Start position
            opacity: '0', // Start invisible
          },
          '10%': {
            opacity: '1', // Fade in
          },
          '90%': {
            opacity: '1', // Visible for most of the duration
          },
          '100%': {
            transform: 'rotate(215deg) translateX(-700px)', // End position (further)
            opacity: '0', // Fade out
          },
        },
      },
      animation: {
        // Link animation names to keyframes and set default properties
        float: 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-in-delay-1': 'fade-in 0.7s ease-out 0.2s forwards', // Example, use inline style for dynamic delays
        'fade-in-delay-2': 'fade-in 0.7s ease-out 0.4s forwards',
        'fade-in-delay-3': 'fade-in 0.7s ease-out 0.6s forwards',
        'fade-in-delay-4': 'fade-in 0.7s ease-out 0.8s forwards',
        meteor: 'meteor 5s linear infinite', // Base duration, individual meteors can vary
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      }
    },
  },
  plugins: [],
};