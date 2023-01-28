import * as React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import StepOne from '../page/StepOne'
import StepTwo from '../page/StepTwo'

const Routing = () => (
  <Routes>
    <Route path='/' element={<StepOne />} />
    <Route path='/step2' element={<StepTwo />} />
  </Routes>
)

export default Routing