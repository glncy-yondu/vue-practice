<template>
  <div :class="twMerge(['flex flex-row items-center rounded-lg border border-gray-500 px-3 py-2', wrapperClasses])">
    <div class="w-full">
      <span v-if="props.label" :class="twMerge(['text-xs text-gray-400'], labelClasses)">{{
        props.label
      }}</span>
      <div class="flex flex-row items-center">
        <div class="mr-1" v-if="props.prefixIcon">
          <component :is="baseIcons[props.prefixIcon]" class="text-gray-500" :size="12" />
        </div>
        <input
          :class="twMerge(['my-2 w-full text-sm focus:outline-none', inputClasses])"
          :placeholder="props.placeholder"
        />
      </div>
    </div>
    <div v-if="props.suffixIcon">
      <component :is="baseIcons[props.suffixIcon]" :class="twMerge(['text-gray-500', suffixIconClasses])" :size="20" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import baseIcons from '@/utils/icons'

const props = withDefaults(
  defineProps<{
    /**
     * The label of the input
     */
    label?: string
    /**
     * The placeholder of the input
     */
    placeholder?: string
    /**
     * State of the input
     */
    state?: 'normal' | 'error' | 'active'
    /**
     * Icon to be displayed before the input
     */
    prefixIcon?: keyof typeof baseIcons
    /**
     * Icon to be displayed after the input
     */
    suffixIcon?: keyof typeof baseIcons
  }>(),
  {
    state: 'normal'
  }
)

const wrapperClasses = computed(() => {
  if (props.state === 'error') {
    return 'border-red-500'
  }
  if (props.state === 'active') {
    return 'border-blue-500'
  }
  return ''
})

const inputClasses = computed(() => {
  const classValue: string[] = []

  if (props.label) {
    classValue.push('my-0')
  }
  return classValue.join(' ')
})

const labelClasses = computed(() => {
  const classValue: string[] = []
  if (props.state === 'error') {
    classValue.push('text-red-500')
  } else if (props.state === 'active') {
    classValue.push('text-blue-500')
  }
  return classValue.join(' ')
})

const suffixIconClasses = computed(() => {
  const classValue: string[] = []
  if (props.state === 'error') {
    classValue.push('text-red-500')
  } else if (props.state === 'active') {
    classValue.push('text-blue-500')
  }
  return classValue.join(' ')
})
</script>
