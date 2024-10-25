import { createContext, useEffect, useState } from 'react'
export const AvalonToursContext = createContext()

export const AvalonToursContextProvider = ({ children }) => {
  const [tours, setTours] = useState(null)

  useEffect(() => {
    fetch(
      // 'https://globus.safetravelsggapi.com/api/v1/globus/get-all-available-tours'
      'http://localhost:8000/api/v1/globus/get-all-available-media-tours'
    )
      .then(res => res.json())
      .then(res => setTours(res?.data.filter(item => item.Brand === 'AVALON')))
  }, [])

  return (
    <AvalonToursContext.Provider value={{ tours: tours }}>
      {children}
    </AvalonToursContext.Provider>
  )
}
