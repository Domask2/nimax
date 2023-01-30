import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { validate } from '../service/validate';
import { useData } from '../components/contex/DataContex';
import { InitErrors, InitValues } from '../type/type';
import useForm from '../hooks/useForm';
import getPrice from '../service/getPrice';
import Form from '../components/form/Form';
import Input from '../components/input/Input';
import Button from '../components/button/Button';

const StepOne = () => {
    const navigate = useNavigate();
    const { setValues } = useData();
    const [price, setPrice] = useState(0);
    const { values, errors, handleChange, handleSubmit } = useForm(
        () => {
            values.totalPrice = price;
            setValues(values);
            navigate('/step2');
        },
        validate,
    );

    useEffect(() => {
        const totalPrice = getPrice(values);
        setPrice(totalPrice);
    }, [values]);

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
                    min='1'
                />

                <Input
                    id='countChildren'
                    name='countChildren'
                    type='number'
                    label='Количество детей от 5 до 12 лет'
                    onChange={handleChange}
                    value={values.countChildren}
                    error={errors?.countChildren}
                    min='0'
                />

                <Input
                    id='countSmallChildren'
                    name='countSmallChildren'
                    type='number'
                    label='Количество детей до 5 лет'
                    onChange={handleChange}
                    value={values.countSmallChildren}
                    error={errors?.countSmallChildren}
                    min='0'
                />

                <div className='group'>
                    <div className='group__title'>Тип номера</div>
                    <div className='group__radio'>
                        <Input
                            id='typeNumber'
                            name='typeNumber'
                            type='radio'
                            label='Эконом'
                            value='economy'
                            checked={values.typeNumber === 'economy'}
                            onChange={handleChange}
                        />

                        <Input
                            id='typeNumber'
                            name='typeNumber'
                            type='radio'
                            label='Стандарт'
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

                <div className='select'>
                    <div className='select__title'>Тип номера</div>
                    <select className='select_item' value={values.typeNumber} onChange={handleChange} name="typeNumber" id="typeNumber" form="form">
                        <option value="economy">Эконом</option>
                        <option value="standard">Стандарт</option>
                        <option value="luxury">Люкс</option>
                    </select>
                </div>


                <Input
                    id='countNumber'
                    name='countNumber'
                    type='number'
                    label='Количество ночей'
                    onChange={handleChange}
                    value={values.countNumber}
                    error={errors?.countNumber}
                    min='1'
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
                    <div className='form_result__sum'>{price} ₽</div>
                </div>
            </div>

            <div className='form_btn'>
                <Button type='submit' className='button primary'>
                    Далее
                </Button>
            </div>
        </Form>
    );
};

export default StepOne
