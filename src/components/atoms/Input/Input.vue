<template>
  <div :class="twMerge(['rounded-lg px-3 py-2 border-gray-500 border', wrapperClasses])">
    <span v-if="props.label" :class="twMerge(['text-xs text-gray-400'], labelClasses)">{{
      props.label
    }}</span>
    <div class="flex flex-row items-center">
      <!-- <div class="">
        <Mail :size="12" class="text-gray-500" />
      </div> -->
      <input
        :class="twMerge(['text-sm focus:outline-none my-2 w-full', inputClasses])"
        :placeholder="props.placeholder"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { Mail } from 'lucide-vue-next';

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
  const classValue = []

  if (props.label) {
    classValue.push('my-0')
  }
  return classValue.join(' ')
})

const labelClasses = computed(() => {
  const classValue = []
  if (props.state === 'error') {
    classValue.push('text-red-500')
  } else if (props.state === 'active') {
    classValue.push('text-blue-500')
  }
  return classValue.join(' ')
})
</script>
