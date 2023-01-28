import { useState, ChangeEvent, FormEvent } from 'react';
import { ErrorType, ValueType1, ValueType2 } from '../type/type';
import { useData } from '../components/contex/DataContex';

const useForm = (
    callback: () => void,
    validate: (values: ValueType1 & ValueType2) => ErrorType,
    initValues: ValueType1 & ValueType2,
    initError: ErrorType,
) => {
    const { data } = useData();
    const [values, setValues] = useState(data);
    const [errors, setErrors] = useState(initError);

    const toNumber = (value: string | number) => {
        if (typeof value === 'number') return value
        return parseInt(value.replace(/[^\d]+/g, ''), 10)
    }

    const formatPrice = (price: string | number) => new Intl.NumberFormat('es-PY').format(toNumber(price))

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        setErrors(validate(values));

        Object.values(errors).forEach((val: string) => {
            if (val === '') {
                callback();
            }
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        event.persist();
        let value: string | number | boolean;

        if (event.target.type === 'number') {
            value = Number(event.target.value);
        } else if (event.target.type === 'tel') {
            const numberValue = toNumber(event.target.value)
            value = formatPrice(numberValue)
        } else {
            value = event.target.value;
        }

        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : value,
        }));
    };

    return { handleChange, handleSubmit, values, errors };
};

export default useForm