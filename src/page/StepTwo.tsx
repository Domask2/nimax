import React from 'react';
import moment from 'moment';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router';
import { validate2 } from '../service/validate';
import { useData } from '../components/contex/DataContex';
import { InitErrors, InitValues2 } from '../type/type';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import useForm from '../hooks/useForm';

const StepOne = () => {
    const navigate = useNavigate();
    const { setValues } = useData();
    const { values, errors, handleChange, handleSubmit } = useForm(
        () => {
            setValues(values);
            navigate('/result');
        },
        validate2,
        InitValues2,
        InitErrors,
    );

    return (
        <Form onSubmit={handleSubmit}>
            <div className='form_container'>
                <h2 className='form__title'>Бронирование номера</h2>
                <h5 className='form__title__desc'>Данные покупателя</h5>
                <Input
                    id='surname'
                    name='surname'
                    type='text'
                    label='Фамилия'
                    value={values.surname}
                    onChange={handleChange}
                    error={errors?.surname}
                />

                <Input
                    id='name'
                    name='name'
                    type='text'
                    label='Имя'
                    onChange={handleChange}
                    value={values.name}
                    error={errors?.name}
                />

                <Input
                    id='patronymic'
                    name='patronymic'
                    type='text'
                    label='Отчество'
                    onChange={handleChange}
                    value={values.patronymic}
                />

                <InputMask mask='+799999999-99' value={values.phone} onChange={handleChange}>
                    <Input
                        id='phone'
                        name='phone'
                        type='text'
                        label='Номер телефона'
                        onChange={handleChange}
                        value={values.phone}
                        error={errors?.phone}
                    />
                </InputMask>

                <Input
                    id='date'
                    type='date'
                    name='date'
                    label='Дата рождения'
                    value={values.date}
                    onChange={handleChange}
                    max={moment().format('YYYY-MM-DD')}
                    error={errors?.date}
                />
            </div>
            <div className='form_btn'>
                <button
                    type='button'
                    className='button text'
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Назад к расчету стоимости
                </button>

                <Button type='submit' className='button primary'>
                    Далее
                </Button>
            </div>
        </Form>
    );
};

export default StepOne
