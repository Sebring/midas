'use client'

import { Checkbox as AriaCheckbox, CheckboxProps } from 'react-aria-components'
import styles from './Checkbox.module.css'
import clsx from 'clsx'

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return (
    <AriaCheckbox
      className={clsx(styles.checkbox, props.className)}
      {...props}
    >
      {({ isIndeterminate }) => (
        <>
          <div className={styles.checkboxInner}>
            <svg
              viewBox="0 0 18 18"
              aria-hidden="true"
            >
              {isIndeterminate ? (
                <rect
                  x={1}
                  y={7.5}
                  width={15}
                  height={3}
                />
              ) : (
                <polyline points="1 9 7 14 15 4" />
              )}
            </svg>
          </div>
          {children}
        </>
      )}
    </AriaCheckbox>
  )
}
