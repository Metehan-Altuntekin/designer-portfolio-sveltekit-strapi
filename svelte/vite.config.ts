import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const filePath = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        scss: {
          prependData: `@import '${filePath.replaceAll('\\', '/')}/src/style/app.scss';`,
        },
      }),
    }),
  ],
  build: {
    outDir: '../public',
  },
})
// C:\xampp\htdocs\portfolio-site-with-PHP-Svelte-TS\svelte/src/style/app.scss
// C:/xampp/htdocs/portfolio-site-with-PHP-Svelte-TS/svelte/src/style/app.scss
