import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import Input from './Input.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Atoms/Input',
  component: Input,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // size: { control: 'select', options: ['small', 'medium', 'large'] },
    // backgroundColor: { control: 'color' },
  },
  args: {
    placeholder: 'Placeholder'
    // primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  //   args: {
  //     primary: true,
  //     label: 'Button',
  //   },
}

export const DefaultWithLabel: Story = {
  args: {
    label: 'Hello World'
  }
}

export const ErrorState: Story = {
  args: {
    state: 'error'
  }
}

export const ActiveState: Story = {
  args: {
    placeholder: 'Placeholder',
    state: 'active'
  }
}

export const ActiveStateWithLabel: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Hello World",
    state: "active"
  }
};

export const ErrorStateWithLabel: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Hello World",
    state: "error"
  }
};
