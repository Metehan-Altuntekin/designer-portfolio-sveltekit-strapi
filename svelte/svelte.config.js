import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const filePath = dirname(fileURLToPath(import.meta.url))

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@import '${filePath.replaceAll('\\', '/')}/src/lib/styles/app.scss';`,
    },
  }),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
  },
}
