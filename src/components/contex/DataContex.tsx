import React, { createContext, useState, useContext, useMemo } from 'react'
import { InitValuesStepOne, InitValuesStepTwo, ValueTypeStepOne, ValueTypeStepTwo } from '../../type/type'

const iDataContextState = {
    data: { ...InitValuesStepOne, ...InitValuesStepTwo },
    // eslint-disable-next-line
    setValues: (values: ValueTypeStepOne | ValueTypeStepTwo) => {},
};

const DataContext = createContext(iDataContextState)

export const DataProvider = ({ children }: {children: React.ReactNode}) => {
  const [data, setData] = useState(iDataContextState.data)

  const setValues = (values: ValueTypeStepOne | ValueTypeStepTwo) => {
    setData(prevData => ({
      ...prevData,
      ...values,
    }))
  }

  const value = useMemo(() => ({ data, setValues }), [setValues, setData]);

  return <DataContext.Provider value={ value }>
    {children}
  </DataContext.Provider>
}

export const useData = () => useContext(DataContext)