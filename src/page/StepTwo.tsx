import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router'
import useForm from '../hooks/useForm';
import validate from '../service/validate';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import { InitErrors, InitValues2 } from '../type/type';
import { useData } from '../components/contex/DataContex';

const StepOne = () => {
    const navigate = useNavigate();
    const { setValues, data } = useData();
    const { values, errors, handleChange, handleSubmit } = useForm(
        () => setValues(values),
        validate,
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

                <Input
                    id='phone'
                    name='phone'
                    type='text'
                    label='Номер телефона'
                    onChange={handleChange}
                    value={values.phone}
                    error={errors?.phone}
                />

                <Input
                    id='date'
                    type='date'
                    name='date'
                    label='Дата рождения'
                    value={values.date}
                    onChange={handleChange}
                    max={moment().format('YYYY-MM-DD')}
                />
            </div>
            <div className='form_btn'>
                <button type="button" className='reverse' onClick={() => {navigate('/')}}>Назад к расчету стоимости</button>

                <button type='submit' className='button is-block is-info is-fullwidth'>
                    Далее
                </button>
            </div>
        </Form>
    );
};

export default StepOne
