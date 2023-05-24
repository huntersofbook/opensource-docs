export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    // https://github.com/nuxt-modules/plausible
    'v-plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],
  plausible: {
    init: {
      apiHost: 'https://rapor.vucod.com',
      domain: 'opensource.huntersofbook.com',
    },
  },
})
