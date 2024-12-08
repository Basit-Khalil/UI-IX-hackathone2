import type { Config } from "tailwindcss";
module.exports={
  theme:{
    screen: {
      'sm':'640px',
      'md':'786px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    }
  }
}
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],

};
export default config;
