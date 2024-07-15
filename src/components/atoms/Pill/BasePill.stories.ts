import type { Meta, StoryObj } from '@storybook/vue3'
import BasePill from './BasePill.vue'

const meta = {
  title: 'Atoms/Pill',
  component: BasePill,
  tags: ['autodocs'],
  args: {
    label: 'Pill',
    variant: 'yellow',
  }
} satisfies Meta<typeof BasePill>

export default meta
type Story = StoryObj<typeof meta>

export const Yellow: Story = {
  args: {
    label: 'Draft',
    variant: 'yellow',
  }
}

export const Green: Story = {
  args: {
    label: 'Active',
    variant: 'green',
  }
}

export const Gray: Story = {
  args: {
    label: 'Inactive',
    variant: 'gray',
  }
}

export const Blue: Story = {
  args: {
    label: 'New',
    variant: 'blue',
  }
}

export const Purple: Story = {
  args: {
    label: 'Recommended',
    variant: 'purple',
  }
}