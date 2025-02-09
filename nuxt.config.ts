// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/fonts"],

  colorMode: {
    preference: 'light'
  },

  compatibilityDate: "2024-12-14"
})