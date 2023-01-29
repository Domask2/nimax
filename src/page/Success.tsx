import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router';
import Form from '../components/form/Form';
import { useData } from '../components/contex/DataContex';
import formatPhone from '../service/formatPhone';
import formatTypeNumber from '../service/formatTypeNumber';
import numWord from '../service/numWord';
import { InitValues, InitValues2 } from '../type/type'

const Result = () => {
    const navigate = useNavigate();
    const { setValues } = useData();
  return (
        <div>
            <div>Заказ успешно оплачен</div>
            <button
                type='button'
                onClick={() => {
                    navigate('/');
                    setValues({ ...InitValues, ...InitValues2 });
                }}
                className='button is-block is-info is-fullwidth'
            >
                Забронировать еще
            </button>
        </div>
    );
};

export default Result;
