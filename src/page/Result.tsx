import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { useData } from '../components/contex/DataContex';
import Form from '../components/form/Form';
import Button from '../components/button/Button';
import formatPhone from '../service/formatPhone';
import formatTypeNumber from '../service/formatTypeNumber';
import numWord from '../service/numWord';
import strUser from '../service/strUser';

const Result = () => {
    const navigate = useNavigate();
    const { data } = useData();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('/success');
        console.log(data);
    };

    const handleClick = () => {
        navigate('/step2');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className='form_container'>
                <h2 className='form__title'>Бронирование номера</h2>
                <h5 className='form__title__desc'>Данные покупателя</h5>

                <div className='description'>
                    <div className='description_user'>
                        {data.surname} {data.name} {data.patronymic}
                    </div>
                    <div className='description_phone'>{formatPhone(data.phone)} </div>
                    <div className='description_number'>
                        Номер «{formatTypeNumber(data.typeNumber)}» на {data.countNumber}{' '}
                        {numWord(data.countNumber, ['ночь', 'ночи', 'ночей'])}{' '}
                    </div>
                    <div className='description_list_user'>
                        {strUser(data)}
                    </div>
                    <div className='description_insurance'>
                        {data.insurance ? 'Страховка включена' : 'Страховка не включена'}{' '}
                    </div>
                    <div className='description_price'>К оплате {data?.totalPrice} </div>
                </div>
            </div>
            <div className='form_btn'>
                <Button type='button' className='button text' onClick={handleClick}>
                    Назад к данным покупателя
                </Button>
                <Button type='submit' className='button primary'>
                    Оплатить
                </Button>
            </div>
        </Form>
    );
};

export default Result
