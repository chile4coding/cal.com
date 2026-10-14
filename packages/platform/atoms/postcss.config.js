import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-import": {},
    "postcss-prefixwrap": `.calcom-atoms`,
  },
};

export default config
