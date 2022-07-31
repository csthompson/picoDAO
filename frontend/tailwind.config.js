// tailwind.config.js
module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        'nav-background': "white",
        'nav-foreground': "#fb6400",
        'nav-border': "#fb6400",
        "brand-primary": "#fb6400",
        "brand-hover": "#fb6400",
        'brand-text': "#475569",
        'brand-background-primary': "white",
        'brand-background-secondary': "white"
      },
    },
  },
  variants: {
    extend: {},
  },
}