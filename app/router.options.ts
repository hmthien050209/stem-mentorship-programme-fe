import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default {
  scrollBehavior(to, _from, _savedPosition) {
    return { el: to.hash, behavior: 'smooth' }
  },
} satisfies RouterConfig
