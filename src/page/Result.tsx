import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router';
import Form from '../components/form/Form';
import { useData } from '../components/contex/DataContex';
import formatPhone from '../service/formatPhone'
import formatTypeNumber from '../service/formatTypeNumber'
import numWord from '../service/numWord'

const Result = () => {
    const navigate = useNavigate();
    const { data } = useData();

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate('/success');
      console.log(data);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className='form_container'>
                <h2 className='form__title'>Бронирование номера</h2>
                <h5 className='form__title__desc'>Данные покупателя</h5>

                <div className='description'>
                  <div className='description_user'>{data.surname} {data.name} {data.patronymic}</div>
                  <div className='description_phone'>{formatPhone(data.phone)} </div>
                  <div className='description_number'>
                    Номер «{formatTypeNumber(data.typeNumber)}» на
                    {' '}{data.countNumber} {numWord(data.countNumber, ['ночь', 'ночи', 'ночей'])}  </div>
                  <div className='description_list_user'>
                    {data.countAdult} {numWord(data.countAdult, ['взрослый', 'взрослых'])},
                    {' '}{data.countChildren} {numWord(data.countChildren, ['ребенок', 'ребенок', 'детей'])} от 12 лет и
                    {' '}{data.countSmallChildren} {numWord(data.countSmallChildren, ['ребенок', 'ребенок', 'детей'])} младше 5 лет

                  </div>
                  <div className='description_insurance'>{data.insurance ? 'Страховка включена' : 'Страховка не включена'} </div>
                  <div className='description_price'>К оплате {data?.totalPrice} </div>

                </div>
            </div>
            <div className='form_btn'>
                <button
                    type='button'
                    className='reverse'
                    onClick={() => {
                        navigate('/step2');
                    }}
                >
                    Назад к данным покупателя
                </button>
                <button type='submit' className='button is-block is-info is-fullwidth'>
                    Оплатить
                </button>
            </div>
        </Form>
    );
};

export default Result
