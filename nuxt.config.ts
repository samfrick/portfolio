// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/ui',
    '@vercel/analytics'
  ],
  css: ['~/assets/css/main.css'],
  // build: {
  //   transpile: ['@iconify/utils']
  // },
  // nitro: {
  //   externals: {
  //     inline: [/@iconify[\\/ ]utils/]
  //   }
  // },
  // icon: {
  //   provider: 'none',
  //   clientBundle: { scan: true }
  // }
})
