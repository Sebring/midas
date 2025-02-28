/**
 * src: https://github.com/radix-ui/primitives/blob/main/packages/react/accordion/src/Accordion.test.tsx
 */

import '@testing-library/jest-dom'
import * as React from 'react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { render, fireEvent, RenderResult } from '@testing-library/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './index'
expect.extend(toHaveNoViolations)

const ITEMS = ['One', 'Two', 'Three']

describe('given a single Accordion', () => {
  let handleValueChange: jest.Mock
  let rendered: RenderResult

  describe('with default orientation=vertical', () => {
    beforeEach(() => {
      handleValueChange = jest.fn()
      rendered = render(
        <AccordionTest
          type="single"
          collapsible
          onValueChange={handleValueChange}
        />
      )
    })

    it('should have no accessibility violations in default state', async () => {
      expect(await axe(rendered.container)).toHaveNoViolations()
    })

    // describe('when navigating by keyboard', () => {
    //   beforeEach(() => {
    //     const trigger = rendered.getByText('Trigger One')
    //     trigger.focus()
    //   })

    //   describe('on `ArrowDown`', () => {
    //     it('should move focus to the next trigger', () => {
    //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' })
    //       expect(rendered.getByText('Trigger Two')).toHaveFocus()
    //     })

    //     it('should move focus to the first item if at the end', () => {
    //       const trigger = rendered.getByText('Trigger Three')
    //       trigger.focus()
    //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' })
    //       expect(rendered.getByText('Trigger One')).toHaveFocus()
    //     })
    //   })

    //   describe('on `ArrowUp`', () => {
    //     it('should move focus to the previous trigger', () => {
    //       const trigger = rendered.getByText('Trigger Three')
    //       trigger.focus()
    //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowUp' })
    //       expect(rendered.getByText('Trigger Two')).toHaveFocus()
    //     })

    //     it('should move focus to the last item if at the beginning', () => {
    //       const trigger = rendered.getByText('Trigger One')
    //       trigger.focus()
    //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowUp' })
    //       expect(rendered.getByText('Trigger Three')).toHaveFocus()
    //     })
    //   })

    //   describe('on `Home`', () => {
    //     it('should move focus to the first trigger', () => {
    //       fireEvent.keyDown(document.activeElement!, { key: 'Home' })
    //       expect(rendered.getByText('Trigger One')).toHaveFocus()
    //     })
    //   })

    //   describe('on `End`', () => {
    //     it('should move focus to the last trigger', () => {
    //       fireEvent.keyDown(document.activeElement!, { key: 'End' })
    //       expect(rendered.getByText('Trigger Three')).toHaveFocus()
    //     })
    //   })
    // })

    // describe('when clicking a trigger', () => {
    //   let trigger: HTMLElement
    //   let contentOne: HTMLElement | null

    //   beforeEach(() => {
    //     trigger = rendered.getByText('Trigger One')
    //     fireEvent.click(trigger)
    //     contentOne = rendered.getByText('Content One')
    //   })

    //   it('should show the content', () => {
    //     expect(contentOne).toBeVisible()
    //   })

    //   it('should have no accessibility violations', async () => {
    //     expect(await axe(rendered.container)).toHaveNoViolations()
    //   })

    //   it('should call onValueChange', () => {
    //     expect(handleValueChange).toHaveBeenCalledWith('One')
    //   })

    //   describe('then clicking the trigger again', () => {
    //     beforeEach(() => {
    //       fireEvent.click(trigger)
    //     })

    //     it('should not close the content', () => {
    //       expect(contentOne).toBeVisible()
    //     })

    //     it('should not call onValueChange', () => {
    //       expect(handleValueChange).toHaveBeenCalledTimes(1)
    //     })
    //   })

    //   describe('then clicking another trigger', () => {
    //     beforeEach(() => {
    //       const trigger = rendered.getByText('Trigger Two')
    //       fireEvent.click(trigger)
    //     })

    //     it('should show the new content', () => {
    //       const contentTwo = rendered.getByText('Content Two')
    //       expect(contentTwo).toBeVisible()
    //     })

    //     it('should call onValueChange', () => {
    //       expect(handleValueChange).toHaveBeenCalledWith('Two')
    //     })

    //     it('should hide the previous content', () => {
    //       expect(contentOne).not.toBeVisible()
    //     })
    //   })
    // })
  })
})

describe('given a multiple Accordion', () => {
  let handleValueChange: jest.Mock
  let rendered: RenderResult

  beforeEach(() => {
    handleValueChange = jest.fn()
    rendered = render(
      <AccordionTest
        type="multiple"
        onValueChange={handleValueChange}
      />
    )
  })

  it('should have no accessibility violations in default state', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  // describe('when navigating by keyboard', () => {
  //   beforeEach(() => {
  //     rendered.getByText('Trigger One').focus()
  //   })

  //   describe('on `ArrowDown`', () => {
  //     it('should move focus to the next trigger', () => {
  //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' })
  //       expect(rendered.getByText('Trigger Two')).toHaveFocus()
  //     })
  //   })

  //   describe('on `ArrowUp`', () => {
  //     it('should move focus to the previous trigger', () => {
  //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowUp' })
  //       expect(rendered.getByText('Trigger Three')).toHaveFocus()
  //     })
  //   })

  //   describe('on `Home`', () => {
  //     it('should move focus to the first trigger', () => {
  //       fireEvent.keyDown(document.activeElement!, { key: 'Home' })
  //       expect(rendered.getByText('Trigger One')).toHaveFocus()
  //     })
  //   })

  //   describe('on `End`', () => {
  //     it('should move focus to the last trigger', () => {
  //       fireEvent.keyDown(document.activeElement!, { key: 'End' })
  //       expect(rendered.getByText('Trigger Three')).toHaveFocus()
  //     })
  //   })
  // })

  // describe('when clicking a trigger', () => {
  //   let trigger: HTMLElement
  //   let contentOne: HTMLElement | null

  //   beforeEach(() => {
  //     trigger = rendered.getByText('Trigger One')
  //     fireEvent.click(trigger)
  //     contentOne = rendered.getByText('Content One')
  //   })

  //   it('should show the content', () => {
  //     expect(contentOne).toBeVisible()
  //   })

  //   it('should have no accessibility violations', async () => {
  //     expect(await axe(rendered.container)).toHaveNoViolations()
  //   })

  //   it('should call onValueChange', () => {
  //     expect(handleValueChange).toHaveBeenCalledWith(['One'])
  //   })

  //   describe('then clicking the trigger again', () => {
  //     beforeEach(() => {
  //       fireEvent.click(trigger)
  //     })

  //     it('should hide the content', () => {
  //       expect(contentOne).not.toBeVisible()
  //     })

  //     it('should call onValueChange', () => {
  //       expect(handleValueChange).toHaveBeenCalledWith([])
  //     })
  //   })

  //   describe('then clicking another trigger', () => {
  //     beforeEach(() => {
  //       const trigger = rendered.getByText('Trigger Two')
  //       fireEvent.click(trigger)
  //     })

  //     it('should show the new content', () => {
  //       const contentTwo = rendered.getByText('Content Two')
  //       expect(contentTwo).toBeVisible()
  //     })

  //     it('should call onValueChange', () => {
  //       expect(handleValueChange).toHaveBeenCalledWith(['One', 'Two'])
  //     })

  //     it('should not hide the previous content', () => {
  //       expect(contentOne).toBeVisible()
  //     })
  //   })
  // })
})

const AccordionTest = (props: React.ComponentProps<typeof Accordion>) => (
  <Accordion {...props}>
    {ITEMS.map((item) => (
      <AccordionItem
        value={item}
        key={item}
      >
        <AccordionTrigger>Trigger {item}</AccordionTrigger>
        <AccordionContent>Content {item}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
)
