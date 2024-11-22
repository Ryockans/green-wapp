import classNames from 'classnames';
import { ChangeEventHandler, useState } from 'react';
import styles from './input.module.scss';

interface UiInputProps {
 value: string;
 id: string;
 label?: string;
 placeholder?: string;
 className?: string;
 onChange: ChangeEventHandler<HTMLInputElement>;
}

export function UiInput(props: UiInputProps) {
  const [focused, setFocus] = useState(false);
  const [hovered, setHovered] = useState(false);

  const stateClasses = { '-focus': focused, '-hover': hovered };
  const containerClass = classNames(styles.container, props.className)
  const wrapperClass = classNames(styles.wrapper, stateClasses);
  const labelClass = classNames(styles.label, stateClasses);

  return (
    <div className={containerClass}>
      {props.label && <label htmlFor={props.id} className={labelClass}>
        {props.label}
      </label>}

      <div  className={wrapperClass} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <input className={styles.input} value={props.value} id={props.id} placeholder={props.placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChange={props.onChange} />
      </div>
    </div>
  )
}