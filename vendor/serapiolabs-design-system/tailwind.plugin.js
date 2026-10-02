// Serapio Labs Design System — Tailwind CSS Plugin
// Maps design tokens to Tailwind utility classes

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, theme }) {
  addBase({
    ':root': {
      '--font-headline': theme('fontFamily.headline'),
      '--font-body': theme('fontFamily.body'),
      '--font-mono': theme('fontFamily.mono'),
    },
  });
}, {
  theme: {
    extend: {
      // --- Spacing (8px base already in Tailwind) ---
      spacing: {
        '4.5': '18px',
        '18': '4.5rem',
        '88': '22rem',
      },

      // --- Typography ---
      fontFamily: {
        headline: ['var(--font-headline)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        'xs': ['var(--text-xs)', { lineHeight: 'var(--leading-normal)' }],
        'sm': ['var(--text-sm)', { lineHeight: 'var(--leading-normal)' }],
        'base': ['var(--text-base)', { lineHeight: 'var(--leading-relaxed)' }],
        'lg': ['var(--text-lg)', { lineHeight: 'var(--leading-snug)' }],
        'xl': ['var(--text-xl)', { lineHeight: 'var(--leading-snug)' }],
        '2xl': ['var(--text-2xl)', { lineHeight: 'var(--leading-tight)' }],
        '3xl': ['var(--text-3xl)', { lineHeight: 'var(--leading-tight)' }],
        '4xl': ['var(--text-4xl)', { lineHeight: 'var(--leading-tight)' }],
        '5xl': ['var(--text-5xl)', { lineHeight: 'var(--leading-tight)' }],
      },
      fontWeight: {
        regular: 'var(--font-regular)',
        medium: 'var(--font-medium)',
        semibold: 'var(--font-semibold)',
        bold: 'var(--font-bold)',
      },
      letterSpacing: {
        tight: 'var(--tracking-tight)',
        wide: 'var(--tracking-wide)',
      },

      // --- Border Radius ---
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },

      // --- Shadows ---
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
      },

      // --- Colors (map to CSS variables so themes work) ---
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          active: 'var(--color-secondary-active)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          active: 'var(--color-accent-active)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          background: 'var(--color-background)',
          border: 'var(--color-border)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        semantic: {
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)',
          info: 'var(--color-info)',
        },
      },

      // --- Animation ---
      transitionDuration: {
        'instant': 'var(--duration-instant)',
        'fast': 'var(--duration-fast)',
        'base': 'var(--duration-base)',
        'slow': 'var(--duration-slow)',
        'slower': 'var(--duration-slower)',
      },
      transitionTimingFunction: {
        'ease-out': 'var(--ease-out)',
        'ease-in': 'var(--ease-in)',
        'ease-in-out': 'var(--ease-in-out)',
      },

      // --- Z-Index ---
      zIndex: {
        dropdown: 'var(--z-dropdown)',
        sticky: 'var(--z-sticky)',
        fixed: 'var(--z-fixed)',
        modal: 'var(--z-modal)',
        popover: 'var(--z-popover)',
        tooltip: 'var(--z-tooltip)',
        toast: 'var(--z-toast)',
      },
    },
  },
});
