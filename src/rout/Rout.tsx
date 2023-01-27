import * as React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import StepOne from '../page/StepOne'

const Rout = () => (
  <Routes>
    <Route path='/' element={<StepOne />} />
  </Routes>
)

export default Rout