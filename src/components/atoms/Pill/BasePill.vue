<template>
  <span
    :class="[
      'rounded-full px-[5px] py-[4px] text-xs font-medium leading-[18px] text-white',
      classes
    ]"
  >
    {{ label.slice(0, 50) }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * The label of the pill
     */
    label: string
    /**
     * Background color of the pill
     */
    variant?: 'yellow' | 'green' | 'gray' | 'blue' | 'purple'
  }>(),
  { variant: 'yellow' }
)

const classes = computed((): string => {
  switch (props.variant) {
    case 'green':
      return 'bg-brand-success-300'
    case 'gray':
      return 'bg-brand-gray-200'
    case 'blue':
      return 'bg-brand-techy-blue-300'
    case 'purple':
      return 'bg-brand-purple-300'
    default:
      return 'bg-brand-hello-yellow-300'
  }
})
</script>
