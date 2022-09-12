import sveltePreprocess from 'svelte-preprocess'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const filePath = dirname(fileURLToPath(import.meta.url))

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@import '${filePath.replaceAll('\\', '/')}/src/style/app.scss';`,
    },
  }),
}
