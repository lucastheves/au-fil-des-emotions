<template>
  <div class="bg-background">
    <Header />
    <div class="px-12 py-8">
      <VideoPlayer />
    </div>

    <Separator>
      <div class="flex flex-row justify-between items-center text-background">
        <h3 class="text-3xl font-bold font-nohemi-bold">17 et 18 mai 2025</h3>
        <h3 class="text-3xl font-bold font-nohemi-bold">Lyon</h3>
        <h3 class="text-3xl font-bold font-nohemi-bold">Hôtel de la métropole</h3>
      </div>
    </Separator>

    <TextBlock />

    <Separator id="schedule">
      <div class="flex flex-row justify-center">
        <h1 class="text-7xl xl:text-9xl font-bold font-faro-display">La programmation</h1>
      </div>
    </Separator>

    <Schedule />

    <PracticalInfo id="practical-info" />
  
    <div class="py-6"></div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import Separator from '@/components/Separator.vue'
import TextBlock from '@/pages/HomePage/components/TextBlock.vue'
import Schedule from '@/pages/HomePage/components/Schedule.vue'
import PracticalInfo from '@/pages/HomePage/components/PracticalInfo.vue'
import Footer from '@/components/Footer.vue'
</script>
