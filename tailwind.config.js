/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./pages/personal.html", "./pages/work.html"],
  theme: {
    extend: {
      colors: {
				smoke: '#e2e8f0',
				darkish: '#1c1917',
				lightish: '#f1f5f9',
				emerald: '#059669',
        cyan: '#22d3ee',
			  },
        fontFamily: {
          libre: "'Libre Baskerville', serif",
        }
    },
  },
  plugins: [],
}