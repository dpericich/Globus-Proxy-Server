import { createContext, useState, useEffect } from 'react'

export const GlobusToursContext = createContext()

export const GlobusToursContextProvider = ({ children }) => {
  const [tours, setTours] = useState(null)

  // fetch('http://localhost:8000/api/v1/globus/get-all-available-tours')
  fetch(
    'https://globus.sldevtestdomain.com/api/v1/globus/get-all-available-tours'
  )
    .then(res => res.json())
    .then(res => setTours(res?.data.filter(item => item.Brand === 'GLOBUS')))

  return (
    <GlobusToursContext.Provider value={{ tours: tours }}>
      {children}
    </GlobusToursContext.Provider>
  )
}
