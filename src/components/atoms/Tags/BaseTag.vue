<template>
  <div :class="tagClasses">
    <span class="text-xs font-medium leading-[15px]">{{ props.text }}</span>
    <span v-if="$slots.icons" class="flex gap-[3.5px]">
      <slot name="icons" />
    </span>
    <button @click="$emit('dismiss')">
      <CircleX stroke-width="1.3" :size="13.3" stroke="#fff" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { twMerge } from 'tailwind-merge'
import { CircleX } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    text?: string
    variant?: 'default' | 'purple' | 'teal' | 'pink' | 'blue' | 'yellow'
    class?: string
  }>(),
  {
    text: 'Placeholder',
    variant: 'default'
  }
)

const emit = defineEmits<{
  (e: 'dismiss'): void
}>()

const slots = useSlots()

const tagClasses = computed(() =>
  twMerge([
    'flex h-[26px] items-center gap-2 rounded-[36px] px-2 py-1 w-fit',
    tagVariant.value,
    props.class,
    slots.icons ? 'bg-black' : ''
  ])
)

const tagVariant = computed((): string => {
  switch (props.variant) {
    case 'purple':
      return 'bg-brand-insightful-purple-300 text-white'
    case 'teal':
      return 'bg-brand-teal-appeal-300 text-brand-serious-navy-300'
    case 'pink':
      return 'bg-brand-enthusiastic-pink-300 text-white'
    case 'blue':
      return 'bg-brand-techy-blue-300 text-white'
    case 'yellow':
      return 'bg-brand-hello-yellow-300 text-white'
    case 'default':
    default:
      return 'bg-brand-serious-navy-50 text-brand-serious-navy-300'
  }
})
</script>
