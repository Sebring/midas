import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'
import { AccordionItem } from './AccordionItem'
import { AccordionTrigger } from './AccordionTrigger'
import { AccordionContent } from './AccordionContent'

const ITEMS = ['Ett', 'Två', 'Tre', 'Fyra']

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
  tags: ['autodocs'],
  args: {
    type: 'single',
  },
  argTypes: {
    type: {
      name: 'type',
      options: ['multiple', 'single'],
      control: { type: 'radio' },
    },
    collapsible: {
      options: [true, false],
      control: { type: 'radio' },
    },
    headingTag: {
      description: 'Choose HTML element to wrap the title on each item',
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

const AccordionTemplate: Story = {
  args: {
    type: 'single',
  },
  render: ({ ...args }) => {
    return (
      <Accordion
        {...args}
        headingTag="h3"
      >
        {ITEMS.map((item) => (
          <AccordionItem
            key={item}
            value={item}
          >
            <AccordionTrigger>Trigger {item}</AccordionTrigger>
            <AccordionContent>Content {item}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  },
}

export const OneItemOpenedAtTheTime: Story = {
  ...AccordionTemplate,
  args: {
    type: 'single',
    collapsible: true,
  },
}

export const MultipleItemOpenedAtTheSameTime: Story = {
  ...AccordionTemplate,
  args: {
    type: 'multiple',
  },
}
