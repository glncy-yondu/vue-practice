import type { Meta, StoryObj } from '@storybook/vue3'
import BaseTag from './BaseTag.vue'
import { Citrus, Armchair } from 'lucide-vue-next'
import { h } from 'vue'

const meta = {
  title: 'atoms/Tag',
  component: BaseTag,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'purple', 'teal', 'pink', 'blue', 'yellow'] },
    icons: {
      control: 'select', options: ['Citrus', 'Armchair', 'None'],
      mapping: {
        Citrus: h(Citrus),
        Armchair: h(Armchair),
        None: null
      }
    },
    class: { control: 'text' }
  }
} satisfies Meta<typeof BaseTag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { BaseTag },
    setup() {
      return { args }
    },
    template: `
    <BaseTag v-bind="args" :key="JSON.stringify(args)">
      <template #icons v-if="args.icons">
       <component :is="args.icons" />  
      </template>
    </BaseTag>`
  }),
}

export const Purple: Story = {
  args: {
    variant: 'purple',
  }
}


export const Teal: Story = {
  args: {
    variant: 'teal'
  }
}

export const Pink: Story = {
  args: {
    variant: 'pink'
  }
}

export const Blue: Story = {
  args: {
    variant: 'blue'
  }
}

export const Yellow: Story = {
  args: {
    variant: 'yellow'
  }
}