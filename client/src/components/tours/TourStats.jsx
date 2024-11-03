// 10/24 - added a ternary to the dates to exclude status: 'Nnot Available'
import { sortPrice, showCurrency, reverseDate, setMissingDateAndPriceTextSize } from '../../utils/helpers'

const TourStats = ({ selectedTour, priceDates, prices, setOpen }) => {
  console.log(`- priceDates: ${priceDates}`)
  return (
    <div className="w-[100%] bg-zinc-100 rounded-lg shadow-md shadow-zinc-200 mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* ------------- Price ------------------ */}
        <div className="flex flex-col justify-center bg-white m-3 shadow-inner shadow-zinc-300 border-8 border-zinc-100">
          <div className="flex justify-center items-center w-[100%] h-[50%]">
            <div className="flex justify-between items-center w-[90%] py-5 px-2 md:px-5">
              <p className="text-2xl md:text-3xl font-bold text-sky-700 font-serif">
                From:{' '}
              </p>

              <p>
                <span className={`text-xl ${setMissingDateAndPriceTextSize ? 'md:text-l' : 'md:text-3xl'} text-zinc-600 pr-1`}>
                  {sortPrice(prices)}
                </span>
                <span>{showCurrency(prices)}</span>
              </p>
            </div>
          </div>

          {/* ------------- Dates ------------------ */}
          <div className="flex justify-center items-center w-[100%] h-[50%]">
            <div className="flex justify-between w-[90%] px-2 md:px-5">
              <p className="text-2xl md:text-3xl font-bold text-sky-700 font-serif">
                Dates:
              </p>
              <select className="bg-white rounded-lg shadow-inner shadow-gray-200 text-black m-1 py-1 px-3 text-sm md:text-lg w-[70%] md:w-[50%]">
                {priceDates?.data?.map((item, i) => (
                  <>
                    {item.status === 'Available' ? (
                      <option key={i} className="border-4 text-black">
                        {`Start: ${reverseDate(
                          item.landStartDate.slice(0, 10)
                        )}`}
                      </option>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
                {/* {priceDates?.data?.map((item, i) => {
                  {item.status === 'Available' ? (
                    <option key={i} className="border-4 text-black">
                      {`Start: ${reverseDate(item.landStartDate.slice(0, 10))}`}
                    </option>
                  ) : (
                    <></>
                  )
                }
                })} */}
              </select>
            </div>
          </div>
        </div>

        {/* ------------- Duration ------------------ */}
        <div className="flex flex-col justify-center bg-white m-3 shadow-inner shadow-zinc-300 border-8 border-zinc-100">
          <div className="flex justify-center items-center w-[100%]">
            <div className="flex justify-between w-[90%] px-2 md:px-5 pt-4">
              <p className="text-2xl md:text-3xl text-sky-700 font-semibold font-serif">
                Duration:
              </p>

              <p className="text-3xl text-zinc-600 pr-1">
                {selectedTour?.data?.Itinerary.length} Days
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[100%] py-5">
            <button
              onClick={setOpen}
              className="rounded-md p-3 text-white bg-sky-800 shadow-md shadow-zinc-400 w-[90%] md:w-[80%] hover:bg-sky-500 hover:scale-105 transition-all text-xl"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourStats
