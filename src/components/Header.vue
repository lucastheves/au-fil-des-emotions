<template>
  <div
    class="w-full flex flex-row justify-between items-center px-12 py-2 bg-background"
    :class="{
      'fixed opacity-90 left-0 top-0': !isOnTop,
    }"
  >
    <a href="/">
      <img class="w-32" src="/assets/logo.png" alt="Logo" />
    </a>
    <div class="flex flex-row space-x-16">
      <button class="py-2 px-8 rounded-full font-faro-display text-white yellow-gradient" @click="goTo('schedule')">LA PROGRAMMATION</button>
      <button class="py-2 px-8 rounded-full font-faro-display text-white red-gradient" @click="goTo('practical-info')">INFOS PRATIQUES</button>
      <button class="py-2 px-8 rounded-full font-faro-display text-white blue-gradient" @click="goTo('about')">À PROPOS</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOnTop = ref(false)

function handleScroll() {
  isOnTop.value = window.scrollY === 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function goTo(id: string) {
  if (id === 'about') {
    alert('en cours de développement..');
    return;
  }

  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
.yellow-gradient {
  background-image: linear-gradient(to right, #fda603, #f7cf0e);
}

.blue-gradient {
  background-image: linear-gradient(to right, #024dda, #7ea9fa);
}

.red-gradient {
  background-image: linear-gradient(to right, #fd030d, #540104);
}

</style>
