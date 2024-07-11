<template>
  <div class="flex h-[182px] w-[152px] flex-col gap-y-3 border border-brand-gray-50 p-4">
    <div :class="['flex h-[120px] w-[120px] flex-col justify-end px-1.5 py-2', selectedColor]"></div>
    <p class="truncate text-xs">{{ trimmedColorText }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    selectedColor: string
  }>(),
  {
    selectedColor: 'bg-brand-techy-blue'
  }
)

const selectedColor = computed(() => props.selectedColor)

const trimmedColorText = computed(() => props.selectedColor.substring(9))
</script>
