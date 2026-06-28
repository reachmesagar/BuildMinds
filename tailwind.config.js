/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3F5F3',
        paperDim: '#E7EAE7',
        ink: '#0F1B24',
        inkSoft: '#1B2C38',
        steel: '#5B6B73',
        steelLight: '#8C9AA0',
        copper: '#C2613A',
        copperLight: '#E08858',
        circuit: '#2E8B7A',
        circuitLight: '#4FAE9C',
        amber: '#E0A458'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(15,27,36,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,27,36,0.05) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '40px 40px'
      },
      boxShadow: {
        node: '0 0 0 4px rgba(194,97,58,0.15)',
        card: '0 1px 2px rgba(15,27,36,0.04), 0 8px 24px -8px rgba(15,27,36,0.10)',
        cardHover: '0 1px 2px rgba(15,27,36,0.06), 0 20px 40px -12px rgba(15,27,36,0.18)'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 0 0 rgba(194,97,58,0.35)' },
          '50%': { opacity: 0.85, boxShadow: '0 0 0 8px rgba(194,97,58,0)' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        scan: 'scan 3s linear infinite'
      }
    }
  },
  plugins: []
}
