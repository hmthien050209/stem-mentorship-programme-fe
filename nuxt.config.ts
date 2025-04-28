// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/sanity',
  ],

  app: {
    pageTransition: {
      name: 'fade',
    },
    layoutTransition: {
      name: 'fade',
    },
  },

  image: {
    format: ['webp', 'avif'],
    sanity: {
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
    },
  },

  icon: {
    serverBundle: {
      collections: ['lucide'],
    },
  },

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
