<script setup lang="ts">
  const props = defineProps({
    visible: Boolean,
  })

  // One-shot trigger
  const _visible = ref(false)

  watch(
    () => props.visible,
    (val) => {
      if (val) {
        _visible.value = true
      }
    },
    {
      once: true,
    },
  )
</script>

<template>
  <div class="grid h-screen grid-cols-3 grid-rows-2 p-8">
    <LazyIndexCulturalResearchDemandChart v-if="_visible" class="col-span-3" />
    <LazyIndexCulturalActivityInterestRateChart v-if="_visible" />
    <LazyIndexAccuracyChart v-if="_visible" />
    <LazyIndexVietNamCultureInterestRateChart v-if="_visible" />
  </div>
</template>
