import { ErrorType, ValueType } from '../type/type'

export const validateStepOne = (values: ValueType) => {
    const errors: ErrorType | null = {};

    if (values.countAdult && values.countSmallChildren) {
        const num = Math.ceil(values.countSmallChildren / values.countAdult);
        if (num > 3) {
            errors.countSmallChildren = 'На 1 взрослого не более 3 детей до 5 лет';
        }
    }

    return errors;
};

export const validateStepTwo = (values: ValueType) => {
    const errors: ErrorType | null = {};
    if (!values.surname) {
        errors.surname = 'Обязательное поле для заполнения';
    }

    if (!values.name) {
        errors.name = 'Обязательное поле для заполнения';
    }

    if (!values.phone) {
        errors.phone = 'Обязательное поле для заполнения';
    }

    if (!values.date) {
        errors.date = 'Обязательное поле для заполнения';
    }

    return errors;
};