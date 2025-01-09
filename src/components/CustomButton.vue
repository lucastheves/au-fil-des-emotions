<template>
  <button
    class="text-background px-6 py-1 rounded-full"
    @click="handleClick"
    :class="{
      'px-6 py-1': size === 'small',
      'border border-blue hover:bg-blue hover:text-background': color === 'blue',
      'border border-green hover:bg-green hover:text-background': color === 'green',
      'border border-red hover:bg-red hover:text-background': color === 'red',
      'border border-dark-purple hover:bg-dark-purple hover:text-background':
        color === 'dark-purple',
      'border border-background hover:bg-background hover:text-orange':
        color === 'primary' && !isActive,

      'bg-blue text-background': color === 'blue' && isActive,
      'bg-green text-background': color === 'green' && isActive,
      'bg-red text-background': color === 'red' && isActive,
      'bg-dark-purple text-background': color === 'dark-purple' && isActive,
      'bg-background text-orange': color === 'primary' && isActive,
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  color: 'primary' | 'green' | 'blue' | 'red' | 'dark-purple',
  size: 'small' | 'big',
  isActive: boolean,
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

function handleClick() {
  emit('click')
}
</script>
