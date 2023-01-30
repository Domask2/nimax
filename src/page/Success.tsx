import React from 'react';
import { useNavigate } from 'react-router';
import { useData } from '../components/contex/DataContex';
import { InitValues, InitValues2 } from '../type/type';

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

export default Result
