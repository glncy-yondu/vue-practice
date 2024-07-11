<template>
  <div class="flex h-[182px] w-[152px] flex-col gap-y-3 border border-brand-gray-50 p-4">
    <div
      :class="twMerge(['flex h-[120px] w-[120px] flex-col justify-end px-1.5 py-2', selectedColor])"
    ></div>
    <p class="truncate text-xs">{{ selectedColor }}</p>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
withDefaults(
  defineProps<{
    selectedColor: string
  }>(),
  {
    selectedColor: 'bg-brand-techy-blue'
  }
)
</script>
