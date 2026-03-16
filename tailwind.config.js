/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cogniva: {
          "primary":           "#534AB7",
          "primary-content":   "#EEEDFE",
          "secondary":         "#EF9F27",
          "secondary-content": "#26215C",
          "accent":            "#AFA9EC",
          "accent-content":    "#26215C",
          "neutral":           "#26215C",
          "neutral-content":   "#EEEDFE",
          "base-100":          "#F8F7FF",
          "base-200":          "#EEEDFE",
          "base-300":          "#AFA9EC",
          "base-content":      "#26215C",
          "info":              "#534AB7",
          "success":           "#1D9E75",
          "warning":           "#EF9F27",
          "error":             "#E24B4A",
          "--rounded-box":     "0.75rem",
          "--rounded-btn":     "0.5rem",
          "--rounded-badge":   "0.375rem",
          "--tab-radius":      "0.5rem",
        },
      },
    ],
  },
};
