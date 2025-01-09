<template>
  <div class="flex flex-col p-2 bg-background rounded-3xl space-y-2">
    <div class="flex flex-row items-center justify-between min-h-16">
      <div
        class="text-background text-sm font-nohemi-regular px-2 py-0.5 rounded-full"
        :class="{
          'bg-blue': item.type === ScheduleItemType.ATELIER,
          'bg-green': item.type === ScheduleItemType.CONFERENCE,
          'bg-red': item.type === ScheduleItemType.TEMPS_ECHANGE,
          'bg-dark-purple': item.type === ScheduleItemType.AUTRES,
        }"
      >
        {{ typeLabel }}
      </div>
      <img :src="pictogram" class="max-h-16" />
    </div>

    <div class="flex flex-col h-full px-2 justify-center">
      <span class="font-nohemi-bold text-lg">{{ item.title }}</span>
      <p class="text-sm font-nohemi-regular">{{ item.description }}</p>
    </div>

    <div class="flex flex-row justify-left items-center space-x-4 px-2">
      <span class="border rounded text-background bg-orange px-2 py-1 text-sm font-nohemi-regular">{{ dateLabel }}</span>
      <span class="border rounded text-background bg-orange px-2 py-1 text-sm font-nohemi-regular" :class="{
        'hidden': !item.time,
      }">{{ item.time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SCHEDULE_ITEMS_PICTOS, SCHEDULE_ITEMS_TYPES, SCHEDULE_ITEMS_DATES } from '@/pages/HomePage/constants'
import { ScheduleItemType, type ScheduleItem } from '@/pages/HomePage/types'
import { computed } from 'vue'

const props = defineProps<{
  item: ScheduleItem
}>()

const pictogram = computed(() => props.item.emotion ? SCHEDULE_ITEMS_PICTOS[props.item.emotion] : '')
const typeLabel = computed(() => SCHEDULE_ITEMS_TYPES[props.item.type])
const dateLabel = computed(() => SCHEDULE_ITEMS_DATES[props.item.date])
</script>
