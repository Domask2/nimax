import React, { ChangeEvent, FC } from 'react'
import './input.scss'

export interface InputType {
  id: string,
  type: string,
  name: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  value?: string | number | undefined,
  checked?: boolean,
  label?: string,
  placeholder?: string,
  error?: string,
  defaultChecked?: boolean,
  min?: string,
  max?: string,
}

const Input: FC<InputType> = ({
                                id,
                                label,
                                name,
                                type,
                                value,
                                placeholder,
                                error,
                                onChange,
                                checked,
                                defaultChecked,
                                min,
                                max,
                              }) => (
  <div className="input_field">
    <label
      className="input_field__label"
      htmlFor={id}
    >
      {label}
      <input
        id={id}
        className='input'
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        checked={checked}
        defaultChecked={defaultChecked}
        min={min}
        max={max}
      />
    </label>
    <div className='input_field__message'>{error}</div>
  </div>
)

export default Input