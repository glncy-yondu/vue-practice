<template>
  <button
    type="button"
    :class="[
      'flex min-w-[200px] max-w-[200px] rounded-md px-[16px] py-4 text-sm font-medium hover:shadow-md',
      classes
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot name="icon-left"></slot>
    <span class="mx-[12px] truncate">{{ label }}</span>
    <slot name="icon-right"></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSlots } from 'vue'

const slots = useSlots()
const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string
    /**
     * primary or secondary button
     */
    primary?: boolean
    /**
     * If disabled or not
     */
    disabled?: boolean
  }>(),
  { primary: true, disabled: false }
)

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const classes = computed(() => ({
  'bg-brand-techy-blue focus:bg-brand-techy-blue-400 text-white disabled:bg-brand-gray-50': props.primary,
  'bg-[#E6F4FE] text-brand-techy-blue-300 border border-1 border-white outline outline-1 outline-brand-techy-blue-300 focus:bg-brand-techy-blue focus:text-white disabled:outline-brand-techy-blue-75 disabled:bg-white disabled:text-brand-techy-blue-75': !props.primary,
  'justify-between': slots['icon-left'] || slots['icon-right'],
  'justify-center': !slots['icon-left'] && !slots['icon-right']
}))

const onClick = () => {
  emit('click', 1)
}
</script>
