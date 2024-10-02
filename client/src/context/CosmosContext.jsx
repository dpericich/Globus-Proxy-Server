import { createContext, useState } from 'react'

export const CosmosToursContext = createContext()

export const CosmosToursContextProvider = ({ children }) => {
  const [tours, setTours] = useState(null)

  fetch(
    'https://globus.safetravelsggapi.com/api/v1/globus/get-all-available-tours'
  )
    .then(res => res.json())
    .then(res => setTours(res?.data.filter(item => item.Brand === 'COSMOS')))

  return (
    <CosmosToursContext.Provider value={{ tours: tours }}>
      {children}
    </CosmosToursContext.Provider>
  )
}
