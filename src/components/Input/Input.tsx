import styles from './input.module.css';

type Props = {
  placeholder?: string;
  styleProp?: string;
}

const Input = (props: Props) => {
  return (
    <input
      placeholder={props.placeholder}
      className={`w-full ${styles.inputStyle} ${props.styleProp}`}
    />
  );
};

export default Input;
