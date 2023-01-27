import React, { createContext, useState, useContext } from 'react'

const DataContext = createContext({})

export const DataProvider = ({ children }: any) => {
  const [data, setData] = useState({})

  const setValues = (values: any) => {
    setData(prevData => ({
      ...prevData,
      ...values,
    }))
  }

  return <DataContext.Provider value={{ data, setValues }}>
    {children}
  </DataContext.Provider>
}

export const useData = () => useContext(DataContext)