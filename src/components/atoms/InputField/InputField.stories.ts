import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import InputField from './InputField.vue'
import baseIcons from "@/utils/icons"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Atoms/InputField',
  component: InputField,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // size: { control: 'select', options: ['small', 'medium', 'large'] },
    // backgroundColor: { control: 'color' },
    prefixIcon: {
      control: 'select',
      options: [undefined, ...Object.keys(baseIcons)],
      description: 'Prefix Icon to display in the input field',
    },
    suffixIcon: {
      control: 'select',
      options: [undefined, ...Object.keys(baseIcons)],
      description: 'Suffix Icon to display in the input field',
    },
  },
  args: {
    placeholder: 'Placeholder',
    prefixIcon: undefined,
    suffixIcon: undefined,
    state: 'normal',
    label: undefined,
    // primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  },
  // parameters: {
  //   slots: {
  //     prefixIcon: {
  //       description: 'Icon to display in the input field',
  //       components: { ...BaseIcons },
  //       template: `<component :is="args.prefixIcon" class="text-gray-500" :size="12"/>`,
  //     }
  //   },
  // },
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

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
    placeholder: 'Placeholder',
    label: 'Hello World',
    state: 'active'
  }
}

export const ErrorStateWithLabel: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Hello World',
    state: 'error'
  }
}

export const DefaultWithSuffixIcon: Story = {
  args: {
    placeholder: "Placeholder",
    suffixIcon: "AlertTriangleIcon"
  }
};

export const DefaultWithPrefixIcon: Story = {
  args: {
    placeholder: "Placeholder",
    state: "normal",
    prefixIcon: "MailIcon"
  }
};
