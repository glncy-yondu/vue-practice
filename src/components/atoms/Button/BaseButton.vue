<template>
  <button
    type="button"
    :class="['group flex max-h-[54px] rounded-md text-sm font-medium', classes]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot name="icon-left"></slot>
    <span class="truncate">{{ label }}</span>
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
     * primary, secondary, tertiary button
     */
    type?: 'primary' | 'secondary' | 'tertiary'
    /**
     * If disabled or not
     */
    disabled?: boolean
  }>(),
  { type: 'primary', disabled: false }
)

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

const classes = computed(() => ({
  'border-1 min-w-[200px] max-w-[200px] gap-[12px] border border-brand-techy-blue-75 bg-brand-techy-blue px-[16px] py-[17px] text-white hover:shadow-md focus:bg-brand-techy-blue-400 disabled:bg-brand-gray-50':
    props.type === 'primary',
  'border-1 min-w-[198px] max-w-[198px] gap-[12px] border border-white bg-[#E6F4FE] px-[16px] py-[17px] text-brand-techy-blue-300 outline outline-1 outline-brand-techy-blue-300 hover:shadow-md focus:bg-brand-techy-blue focus:text-white disabled:bg-white disabled:text-brand-techy-blue-75 disabled:outline-brand-techy-blue-75':
    props.type === 'secondary',
  'border-1 gap-[10px] border border-brand-gray-50 px-[12px] py-[17px] hover:border-brand-techy-blue-300 hover:shadow-lg focus:border-brand-techy-blue-300 focus:bg-brand-techy-blue focus:text-white':
    props.type === 'tertiary',
  'justify-between': slots['icon-left'] || slots['icon-right'],
  'justify-center': !slots['icon-left'] && !slots['icon-right']
}))

const onClick = () => {
  emit('click', 1)
}
</script>
