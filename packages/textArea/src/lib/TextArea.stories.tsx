import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'TextArea',
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
      description: 'Etikett',
    },
    description: {
      type: 'string',
    },
    
  },
}
export default meta
type Story = StoryObj<typeof TextArea>

export const Primary: Story = {
  args: {
    label: 'Label',
    description: 'Description',
  },
}

export const NotValid = {
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Errror!',
  },
}
export const Disabled = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
}
