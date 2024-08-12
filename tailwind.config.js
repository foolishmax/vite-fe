/** @type {import('tailwindcss').Config} */
export default {
  content: ["./business/**/*.{tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 关闭默认样式
  },
}