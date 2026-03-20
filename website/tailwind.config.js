/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cogstrata: {
          "primary":           "#3e77ff",
          "primary-content":   "#fefffe",
          "secondary":         "#91c1ff",
          "secondary-content": "#393333",
          "accent":            "#91c1ff",
          "accent-content":    "#393333",
          "neutral":           "#393333",
          "neutral-content":   "#fefffe",
          "base-100":          "#fefffe",
          "base-200":          "#f5f5f5",
          "base-300":          "#e8e8e8",
          "base-content":      "#393333",
          "info":              "#3e77ff",
          "success":           "#1D9E75",
          "warning":           "#91c1ff",
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
