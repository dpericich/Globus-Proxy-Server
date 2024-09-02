import { useEffect, useState } from 'react'

const TourPricing = ({ id }) => {
  const [priceData, setPriceData] = useState(null)
  useEffect(() => {
    try {
      fetch('http://localhost:8000/api/v1/globus/get-departures', {
        // fetch('https://globus.sldevtestdomain.com/api/v1/globus/get-departures', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ tourNumber: id }),
      })
        .then(res => res.json())
        .then(res => {
          setPriceData(res)
          console.log('This', priceData)
        })
    } catch (e) {}
  }, [])
  return (
    <div className="flex flex-col py-2 gap-4 justify-center items-center w-[100%]">
      <p>
        <span className="text-3xl font-serif">
          {priceData?.data[0].startCity}
        </span>{' '}
        <span className="font-bold">TO </span>
        <span className="text-3xl font-serif">
          {priceData?.data[0].endCity}
        </span>
      </p>
      <p className="text-xl">
        From:{' '}
        <span className="font-bold text-sky-700">
          ${priceData?.data[0].single} (USD)
        </span>
      </p>
      <select className=" bg-white rounded-lg shadow-inner shadow-gray-200 text-black m-1 py-1 px-3 w-[60%]">
        {priceData?.data.map((item, i) => (
          <>
            {' '}
            <option key={i} className="border-4 text-black w-[100%]">
              <div>
                <p>Start Date: {item.airStartDate.slice(0, 10)}</p>
              </div>
            </option>
          </>
        ))}
      </select>
    </div>
  )
}

export default TourPricing
