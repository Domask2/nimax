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
    const [errors, setErrors] = useState<any>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        setErrors(validate(values));

        if (Object.keys(validate(values))?.length === 0) {
            callback();
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        let value: string | number | boolean;

        if (event.target.type === 'number') {
            value = Number(event.target.value);
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