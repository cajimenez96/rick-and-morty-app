import React, { useEffect, useState } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  type: 'green' | 'none';
  label: string;
  icon?: string;
  style?: string;
}

const typesButton = [
  {color: 'green', style: styles.greenButton},
  {color: 'none', style: styles.noneButton},
];

const Button = (props: ButtonProps) => {
  const [typeButton, setTypeButton] = useState<string>('');

  const renderStyle = (type: string) => {
    const color = (typesButton.filter((button) => {
      return button.color === type;
    }));
    return color[0].style;
  }

  useEffect(() => {
    setTypeButton(renderStyle(props.type));
  }, [props.type]);


  return (
    <button
      className={`w-28 rounded-md px-3 py-2 mx-auto ${typeButton}`}
    >
        {props.label}
    </button>
  )
};

export default Button;
