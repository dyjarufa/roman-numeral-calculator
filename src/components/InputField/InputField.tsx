import React, { forwardRef, InputHTMLAttributes } from "react";

import styles from './InputField.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const InputField: React.ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({name, label, ...rest}, ref) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input 
        ref={ref}
        type="text"
        autoFocus
        {...rest}
      />
    </div>
  );
}

export default forwardRef(InputField)
