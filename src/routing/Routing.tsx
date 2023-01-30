import * as React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import StepOne from '../page/StepOne'
import StepTwo from '../page/StepTwo'
import Result from '../page/Result'
import Success from '../page/Success/Success'

const Routing = () => (
  <Routes>
    <Route path='/' element={<StepOne />} />
    <Route path='/step2' element={<StepTwo />} />
    <Route path='/result' element={<Result />} />
    <Route path='/success' element={<Success />} />
  </Routes>
)

export default Routing