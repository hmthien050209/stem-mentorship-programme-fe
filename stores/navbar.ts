export const useNavBarStore = defineStore('navbar', () => {
  const navBarRef = ref<HTMLElement | null>(null)
  const isHighlighted = ref(false)

  watchEffect(() => {
    if (isHighlighted.value) {
      navBarRef.value?.classList.add('!bg-black', '!h-16', '!text-white')
    } else {
      navBarRef.value?.classList.remove('!bg-black', '!h-16', '!text-white')
    }
  })

  return {
    isHighlighted,
    navBarRef,
  }
})
