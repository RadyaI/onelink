// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'id'
      }
    },
  },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  }, 
  compatibilityDate: '2024-07-22',
  runtimeConfig: {
    public: {
      firebaseKey: process.env.NUXT_FIREBASE_KEY
    }
  },
  plugins: [
    '~/plugins/firebase.js'
  ]
}); 