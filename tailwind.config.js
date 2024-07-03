import { content as _content } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/flowbite/**/*.js",
  'node_modules/flowbite-react/lib/esm/**/*.js',
  _content(),
];
export const plugins = [
  require('flowbite/plugin')
];
