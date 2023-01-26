import React, { FC } from 'react';
import './input.scss';

export interface InputType {
  label: string,
  type: string,
  value: string,
  placeholder: string,
  onChange: (v: string) => void
}

const Input: FC<InputType> = ({ label, type, value,placeholder, onChange }) => (
    <label htmlFor={label}>
      {label}
      <input
        placeholder={placeholder}
        className='input'
        id={label}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  )

export default Input