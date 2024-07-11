import type { Meta, StoryObj } from '@storybook/vue3'
import ColorBox from './ColorBox.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'base/ColorBox',
  component: ColorBox,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // size: { control: 'select', options: ['small', 'medium', 'large'] },
    // backgroundColor: { control: 'color' }
  },
  args: {
    // primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn()
  }
} satisfies Meta<typeof ColorBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // primary: true,
    // label: 'Button'
  }
}
