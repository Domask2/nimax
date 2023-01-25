import React, { FC } from 'react'
import './input.scss';

interface InputType {
  label: string,
  type: string,
  value: string,
  onChange: (v: string) => void
}

const Input: FC<InputType> = ({ label, type, value, onChange }) => (
  <label htmlFor={label}>
    {label}
    <input
      className="input"
      id={label}
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </label>
)

export default Input