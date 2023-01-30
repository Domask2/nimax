import React, { ChangeEvent, FC, useEffect } from 'react';
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
    min?: string | number;
    max?: string | number;
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
}) => {
    let classname: string;
    switch (type) {
        case 'radio':
            classname = 'input_radio';
            break;
        case 'checkbox':
            classname = 'input_checkbox';
            break;
        default:
            classname = 'input';
    }

    return (
        <div className='input_field'>
            {type !== 'radio' && <div className='input_field__label'>{label}</div>}
            <div className='input_field__wrapper'>
                <input
                    id={id}
                    className={error ? `${classname} danger` : `${classname}`}
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
                {error && <div className='input_field__message'>{error}</div>}
            </div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            {type === 'checkbox' && <label htmlFor={id} className='custom-checkbox' />}
            {type === 'radio' && <div className='input_field__label_radio'>{label}</div>}
        </div>
    );
};

export default Input