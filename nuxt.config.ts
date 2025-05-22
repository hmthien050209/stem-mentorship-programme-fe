// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // Nuxt is not working well on the latest version unless we disable SSR
  // (we don't know the original cause yet, our assumption is that we've tried to modify the DOM
  // improperly, but we aren't)
  // The most relevant GitHub issue is https://github.com/nuxt/nuxt/issues/32178
  ssr: false,

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/sanity',
  ],

  app: {
    pageTransition: { name: 'dissolve', mode: 'out-in' },
    layoutTransition: { name: 'dissolve', mode: 'out-in' },
  },

  image: {
    format: ['webp', 'avif'],
    domains: ['cdn.sanity.io'],
  },

  icon: {
    serverBundle: {
      collections: ['lucide'],
    },
  },

  imports: {
    dirs: ['types'],
  },

  // routeRules: {
  //   '/**': {
  //     prerender: true,
  //   },
  //   '/info/**': {
  //     prerender: true,
  //   },
  // },

  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
  },

  fonts: {
    defaults: {
      weights: [400, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['vietnamese'],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
