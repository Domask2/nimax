import React from 'react';
import { useNavigate } from 'react-router';
import useForm from '../hooks/useForm';
import validate from '../service/validate';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import { InitErrors, InitValues } from '../type/type';
import { useData } from '../components/contex/DataContex';

const StepOne = () => {
    const { setValues, data } = useData();
    const navigate = useNavigate();

    const { values, errors, handleChange, handleSubmit } = useForm(
        () => {
            setValues(values);
            navigate('/step2');
        },
        validate,
        InitValues,
        InitErrors,
    );

    return (
        <Form onSubmit={handleSubmit}>
          <div className='form_container'>
            <h2 className='form__title'>Бронирование номера</h2>
            <h5 className='form__title__desc'>Бронирование номера</h5>
            <Input
                id='countAdult'
                name='countAdult'
                type='number'
                label='Количество взрослых'
                value={values.countAdult}
                onChange={handleChange}
                error={errors?.countAdult}
            />

            <Input
                id='countChildren'
                name='countChildren'
                type='number'
                label='Количество детей от 5 до 12 лет'
                onChange={handleChange}
                value={values.countChildren}
                error={errors?.countChildren}
            />

            <Input
                id='countSmallChildren'
                name='countSmallChildren'
                type='number'
                label='Количество детей до 5 лет'
                onChange={handleChange}
                value={values.countSmallChildren}
                error={errors?.countSmallChildren}
            />

            <div className='group'>
                <div className='group__title'>Тип номера</div>
                <div className='group__radio'>
                    <Input
                        id='typeNumber'
                        name='typeNumber'
                        type='radio'
                        label='Экономный'
                        value='economy'
                        checked={values.typeNumber === 'economy'}
                        onChange={handleChange}
                    />

                    <Input
                        id='typeNumber'
                        name='typeNumber'
                        type='radio'
                        label='Стандартный'
                        value='standard'
                        checked={values.typeNumber === 'standard'}
                        onChange={handleChange}
                    />

                    <Input
                        id='typeNumber'
                        name='typeNumber'
                        type='radio'
                        label='Люкс'
                        value='luxury'
                        checked={values.typeNumber === 'luxury'}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <Input
                id='countNumber'
                name='countNumber'
                type='number'
                label='Количество ночей'
                onChange={handleChange}
                value={values.countNumber}
                error={errors?.countNumber}
            />

            <Input
                id='insurance'
                name='insurance'
                type='checkbox'
                label='Страховка'
                onChange={handleChange}
                checked={values.insurance}
            />

            <div className='form_result'>
                <div className='form_result__label'>Итого:</div>
                <div className='form_result__sum'>1000 ₽</div>
            </div>

          </div>

            <div className='form_btn'>
                <button type='submit' className='button is-block is-info is-fullwidth'>
                    Далее
                </button>
            </div>
        </Form>
    );
};

export default StepOne
