import React, { ChangeEvent, FC, KeyboardEventHandler } from 'react';
import './input.scss';

export interface InputType {
    id: string;
    type: string;
    name: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number | undefined;
    checked?: boolean;
    label?: string;
    placeholder?: string;
    error?: string;
    defaultChecked?: boolean;
    min?: string;
    max?: string;
    pattern?: string;
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
    pattern,
}) => (
    <div className='input_field'>
        {type !== 'radio' && <div className='input_field__label'>{label}</div>}
        <input
            id={id}
            className={type === 'radio' ? 'input_radio' : 'input'}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            checked={checked}
            defaultChecked={defaultChecked}
            min={min}
            max={max}
            pattern={pattern}
        />
        {type === 'radio' && <div className='input_field__label_radio'>{label}</div>}
        <div className='input_field__message'>{error}</div>
    </div>
);

export default Input