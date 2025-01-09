<template>
  <button
    class="text-black p-2 rounded-md button-link"
    @click="handleClick"
    :class="{
      'text-2xl': size === 'big',
      'text-base': size === 'small',
      'active': isActive,
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  size: 'big' | 'small'
  isActive: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

function handleClick() {
  emit('click')
}
</script>

<style scoped>
.button-link:hover,
.button-link.active {
  border-bottom: 4px solid;
  border-image: linear-gradient(
      to right,
      var(--color-gradient-start) 0%,
      var(--color-gradient-end) 100%
    )
    1;
}
</style>
