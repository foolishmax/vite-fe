import checker from "vite-plugin-checker";

export default function checkerPlugin() {
  return checker({
    typescript: {
      buildMode: true,
    },
  });
}
