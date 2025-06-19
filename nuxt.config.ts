// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss"
  ],
  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: "light",
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },

  app: {
    head: {
      title: 'Casamento Bia & Hugo',
      meta: [
        { name: 'description', content: 'Casamento Bia & Hugo.' }
      ],
      htmlAttrs: {
        lang: 'pt',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  compatibilityDate: "2024-12-14"
})