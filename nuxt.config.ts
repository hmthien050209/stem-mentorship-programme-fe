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
    '@pinia/nuxt',
  ],

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

  routeRules: {
    '/': {
      prerender: true,
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
