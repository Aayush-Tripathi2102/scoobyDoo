import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        vcr: ['VCR_OSD_MONO', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
