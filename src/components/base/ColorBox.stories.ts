import type { Meta, StoryObj } from '@storybook/vue3'
import { colorOptionsArr } from '@/utils/colors'
import ColorBox from './ColorBox.vue'

const meta = {
  title: 'base/ColorBox',
  component: ColorBox,
  tags: ['autodocs'],
  argTypes: {
    selectedColor: { control: 'select', options: colorOptionsArr() }
  },
  args: {
    selectedColor: colorOptionsArr()[0]
  }
} satisfies Meta<typeof ColorBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
