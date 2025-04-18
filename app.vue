<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Casamento Bia & Hugo',
  ogTitle: 'Casamento Bia & Hugo',
  description: 'Casamento Bia & Hugo | 06/09/2025 Casa Salgueiro.',
  ogDescription: 'Casamento Bia & Hugo | 06/09/2025 Casa Salgueiro.',
  ogImage: 'https://casamentobiahugo.com/images/hero2.jpeg',
  twitterCard: 'summary_large_image',
})
</script>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
