
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", //styless all of the docs in src
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms')],
}