import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import Button from './BaseButton.vue'
import { ChevronDown, TrendingUp } from 'lucide-vue-next'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    type: 'primary',
    label: 'Button',
    disabled: false,
    onClick: fn()
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button'
  }
}

export const PrimaryLeftIcon: Story = {
  args: {
    type: 'primary',
    label: 'Button'
  },
  render: (args) => ({
    components: { Button, ChevronDown },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template v-slot:icon-left><ChevronDown size="20"/></template>
      </Button>
    `
  })
}

export const PrimaryRightIcon: Story = {
  args: {
    type: 'primary',
    label: 'Button'
  },
  render: (args) => ({
    components: { Button, ChevronDown },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template v-slot:icon-right><ChevronDown size="20"/></template>
      </Button>
    `
  })
}

export const PrimaryBothIcon: Story = {
  args: {
    type: 'primary',
    label: 'Button'
  },
  render: (args) => ({
    components: { Button, ChevronDown },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template v-slot:icon-left><ChevronDown size="20"/></template>
        <template v-slot:icon-right><ChevronDown size="20"/></template>
      </Button>
    `
  })
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Button'
  }
}

export const SecondaryLeftIcon: Story = {
  args: {
    type: 'secondary',
    label: 'Button'
  },
  render: (args) => ({
    components: { Button, ChevronDown },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template v-slot:icon-left><ChevronDown size="20"/></template>
      </Button>
    `
  })
}

export const SecondaryRightIcon: Story = {
  args: {
    type: 'secondary',
    label: 'Button'
  },
  render: (args) => ({
    components: { Button, ChevronDown },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template v-slot:icon-right><ChevronDown size="20"/></template>
      </Button>
    `
  })
}

export const SecondaryBothIcon: Story = {
  args: {
    type: 'secondary',
    label: 'Button'
  },
  render: (args) => ({
    components: { Button, ChevronDown },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template v-slot:icon-left><ChevronDown size="20"/></template>
        <template v-slot:icon-right><ChevronDown size="20"/></template>
      </Button>
    `
  })
}

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    label: 'Button'
  },
  render: (args) => ({
    components: { Button, TrendingUp },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template v-slot:icon-left><TrendingUp class="text-brand-techy-blue-300 group-focus:text-white" size="20"/></template>
      </Button>
    `
  })
}
