import React from 'react'
import useForm from '../hooks/useForm'
import validate from '../service/validate'
import Form from '../components/form/Form'
import Input from '../components/input/Input'
import { InitErrors, InitValues } from '../type/type'
import { useData } from '../components/contex/DataContex'

const StepOne = () => {
  const successSubmit = () => {
    console.log('ok')
  }

  const { values, errors, handleChange, handleSubmit } = useForm(successSubmit, validate, InitValues, InitErrors)

  const { setValues, data } = useData();

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id='countAdult'
        name='countAdult'
        type='number'
        value={values.countAdult}
        onChange={handleChange}
        error={errors?.countAdult}
      />

      <Input
        id='countChildren'
        name='countChildren'
        type='number'
        onChange={handleChange}
        value={values.countChildren}
        error={errors?.countChildren}
      />

      <Input
        id='countSmallChildren'
        name='countSmallChildren'
        type='number'
        onChange={handleChange}
        value={values.countSmallChildren}
        error={errors?.countSmallChildren}
      />

      <div className='group'>
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

      <Input
        id='countNumber'
        name='countNumber'
        type='number'
        onChange={handleChange}
        value={values.countNumber}
        error={errors?.countNumber}
      />

      <Input
        id='insurance'
        name='insurance'
        type='checkbox'
        onChange={handleChange}
        checked={values.insurance}
      />

      <button type='submit' className='button is-block is-info is-fullwidth'>Login</button>
    </Form>
  )
}

export default StepOne
