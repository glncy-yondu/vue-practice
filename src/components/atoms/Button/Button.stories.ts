import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import Button from './Button.vue'
import ChevronDown from '@/components/icons/fontawesome/ChevronDown.vue'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    primary: false,
    disabled: false,
    onClick: fn()
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}

export const LeftIcon: Story = {
  args: {
    primary: true,
    label: 'Button'
  },
  render: (args) => ({
    components: { Button, ChevronDown },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template v-slot:icon-left><ChevronDown/></template>
      </Button>
    `
  })
}

export const RightIcon: Story = {
  args: {
    primary: true,
    label: 'Button'
  },
  render: (args) => ({
    components: { Button, ChevronDown },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template v-slot:icon-right><ChevronDown/></template>
      </Button>
    `
  })
}

export const BothIcon: Story = {
  args: {
    primary: true,
    label: 'Button'
  },
  render: (args) => ({
    components: { Button, ChevronDown },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template v-slot:icon-left><ChevronDown/></template>
        <template v-slot:icon-right><ChevronDown/></template>
      </Button>
    `
  })
}
