import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 浮世绘配色
        ukiyo: {
          'beni': '#E63946',      // 朱红 - 浮世绘经典红
          'indigo': '#1D3557',    // 靛蓝 - 深海蓝
          'aizumi': '#244F8A',    // 藍紫 - 紫蓝色
          'shu': '#D4A373',       // 赭石 - 棕色调
          'kin': '#C9B037',       // 金色
          'sumi': '#1A1A1A',      // 墨色 - 深黑
          'shironeri': '#F5F3EF', // 白练 - 米白
          'hai': '#8B9D83',       // 灰绿
          'kuchiba': '#CC7A50',   // 栗色
        },
        // 浮雕阴影
        relief: {
          'light': 'rgba(255, 255, 255, 0.15)',
          'shadow': 'rgba(0, 0, 0, 0.4)',
          'deep': 'rgba(0, 0, 0, 0.6)',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'relief': '4px 4px 0px 0px rgba(0, 0, 0, 0.9)',
        'relief-sm': '2px 2px 0px 0px rgba(0, 0, 0, 0.9)',
        'relief-lg': '8px 8px 0px 0px rgba(0, 0, 0, 0.9)',
        'float': '0 20px 60px -10px rgba(0, 0, 0, 0.5)',
        'engrave': 'inset 3px 3px 6px rgba(0, 0, 0, 0.3), inset -3px -3px 6px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
