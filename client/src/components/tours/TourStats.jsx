import React from 'react'

const TourStats = ({ selectedTour, priceDates, setOpen }) => {
  return (
    <div className="w-[100%] bg-zinc-100 rounded-lg shadow-md shadow-zinc-200 mb-5">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* ------------- Price and Dates ------------------ */}
        <div className="flex flex-col py-5 justify-center items-center bg-white rounded-md m-2 shadow-inner shadow-zinc-300">
          <p className="text-xl">
            From:{' '}
            <span className="font-bold text-sky-700">
              ${priceDates?.data[0].single} (USD)
            </span>
          </p>
          <select className=" bg-white rounded-lg shadow-inner shadow-gray-200 text-black m-1 py-1 px-3 w-[70%]">
            {priceDates?.data.map((item, i) => (
              <option key={i} className="border-4 text-black w-[100%]">
                {`Start Date: ${item.airStartDate.slice(0, 10)}`}
              </option>
            ))}
          </select>
        </div>
        {/* ------------- Duration, Meals ------------------ */}
        <div className="flex flex-col justify-center items-center p-3 bg-white rounded-md m-2 shadow-inner shadow-zinc-300">
          <p className="text-md">
            <span className="text-3xl text-sky-700 font-semibold font-serif">
              Duration
            </span>
            <br></br>

            <span className="text-zinc-500 text-xl">
              {selectedTour?.data?.Itinerary.length} Days
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-3 bg-white rounded-md m-2 shadow-inner shadow-zinc-300">
          <p className="text-md">
            <span className="text-3xl text-sky-700 font-semibold font-serif">
              Meals
            </span>
            <br></br>

            <span className="text-zinc-500 text-xl">
              {selectedTour?.data['Meals']}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[100%] pt-4 pb-6 rounded-b-lg">
        {' '}
        <button
          onClick={setOpen}
          className="rounded-md p-3 text-white bg-sky-600 shadow-md shadow-zinc-400 w-[90%] md:w-[40%] hover:bg-sky-800 hover:scale-105 transition-all text-xl"
        >
          LET'S CONNECT!
        </button>
      </div>
    </div>
  )
}

export default TourStats
