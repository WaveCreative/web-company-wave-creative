const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta-sans)', 'sans-serif'],
      },
    },
  },
};

export default config;
