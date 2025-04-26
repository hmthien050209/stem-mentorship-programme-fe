<template>
  <div>
    <BaseNavBar />
    <main>
      <slot />
    </main>
    <LazyBaseFooter hydrate-on-idle />
  </div>
</template>
<script setup lang="ts"></script>
