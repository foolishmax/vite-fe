/** @type {import('tailwindcss').Config} */
export default {
  content: ["./business/**/*.{tsx,jsx}", "!./node_modules/**/*"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 关闭默认样式
  },
};
