import { MouseEventHandler, PropsWithChildren } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  label?: string;
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const UiButton = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick} disabled={props.disabled}>
      {props.label ?? props.children}
    </button>
  );
}