import React from 'react';
import styles from './button.module.css';

type ButtonProps = {
  label: string;
  icon?: string;
  style?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`p-4 ${styles.buttonStyle} ${props.style}`}
    >
        {props.label}
    </button>
  )
};

export default Button;
