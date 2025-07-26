import { createContext, useEffect, useState } from "react";
export const GlobusToursContext = createContext();

export const GlobusToursContextProvider = ({ children }) => {
  const [tours, setTours] = useState(null);

  useEffect(() => {
    fetch(
      // 'https://globus.safetravelsggapi.com/api/v1/globus/get-all-available-media-tours'
      "http://localhost:8000/api/v1/globus/get-all-available-media-tours"
    )
      .then((res) => res.json())
      .then((res) =>
        setTours(res?.data.filter((item) => item.Brand === "GLOBUS"))
      );
  }, []);

  return (
    <GlobusToursContext.Provider value={{ tours: tours }}>
      {children}
    </GlobusToursContext.Provider>
  );
};
