<script setup>
import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})
</script>
<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <div v-if="$route.path !== '/login'">
      <NuxtLayout>
        <NuxtPage class="p-4 sm:ml-64 mt-10" />
      </NuxtLayout>
    </div>
    <div v-else>
      <NuxtPage/>
    </div>
  </div>
</template>
