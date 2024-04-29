"use client"

import { Button as AriaButton, ButtonProps } from 'react-aria-components';
import styles from './button.module.css'

export const Button = (props: ButtonProps) => {
  return <AriaButton className={styles.button} {...props} />;
};
