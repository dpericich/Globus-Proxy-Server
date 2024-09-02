import { createContext, useState, useEffect } from 'react'

export const ToursContext = createContext()

export const ToursContextProvider = ({ children }) => {
  const [tours, setTours] = useState(null)

  useEffect(() => {
    // fetch('http://localhost:8000/api/v1/globus/get-all-available-tours')
    fetch(
      'https://globus.sldevtestdomain.com/api/v1/globus/get-all-available-tours'
    )
      .then(res => res.json())
      .then(res => setTours(res?.data.filter(item => item.Brand === 'GLOBUS')))
  }, [])

  return (
    <ToursContext.Provider value={{ tours: tours }}>
      {children}
    </ToursContext.Provider>
  )
}
