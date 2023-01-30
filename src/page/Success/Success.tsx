import React from 'react';
import { useNavigate } from 'react-router';
import { useData } from '../../components/contex/DataContex';
import { InitValuesStepOne, InitValuesStepTwo } from '../../type/type';

const Result = () => {
    const navigate = useNavigate();
    const { setValues } = useData();

    return (
        <div className='success'>
            <div className='success_container'>
                <div className='success_title'>
                    <img src='./success.png' alt='success' />
                    Заказ успешно оплачен
                </div>
                <div className='success_wrapper_button'>
                    <button
                        type='button'
                        onClick={() => {
                            navigate('/');
                            setValues({ ...InitValuesStepOne, ...InitValuesStepTwo });
                        }}
                        className='button primary'
                    >
                        Забронировать еще
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Result
