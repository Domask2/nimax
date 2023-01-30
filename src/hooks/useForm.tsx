import { useState, FormEvent, ChangeEvent } from 'react'
import { ErrorType, ValueType } from '../type/type'
import { useData } from '../components/contex/DataContex';

const useForm = (
    callback: () => void,
    validate: (values: ValueType) => ErrorType,
) => {
    const { data } = useData();
    const [values, setValues] = useState(data);
    const [errors, setErrors] = useState<ErrorType | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        setErrors(validate(values));

        if (Object.keys(validate(values))?.length === 0) {
            callback();
        }
    };

    const handleChange = (event: ChangeEvent<HTMLSelectElement & HTMLInputElement>) => {
        event.persist();
        let value: string | number | boolean;

        if (event.target.type === 'number') {
            value = Number(event.target.value);
        } else {
            value = event.target.value;
        }

        if (event.target.type === 'select') {
            setValues((values) => ({
                ...values,
                [event.target.name]: event.target.type === 'checkbox' ? event.target.value : value,
            }));
        } else {
            setValues((values) => ({
                ...values,
                [event.target.name]:
                    event.target.type === 'checkbox' ? event.target.checked : value,
            }));
        }
    };

    return { handleChange, handleSubmit, values, errors };
};

export default useForm