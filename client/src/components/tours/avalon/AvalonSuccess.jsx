import TourDetailsOverview from './../TourDetailsOverview'
import ItineraryCard from './../ItineraryCard'

const AvalonSuccess = ({ selectedTour, id, brand }) => {
  return (
    // <p>TEST</p>
    <>
      <div className="flex flex-col justify-start items-start bg-white rounded-xl pb-5">
        {/* ----------- Title Banner ---------- */}
        <div className="flex flex-col justify-center items-center bg-sky-700 p-10 rounded-t-lg w-[100%] h-[80px]">
          <p className="text-xl md:text-5xl text-white font-serif">
            {selectedTour?.data['Length Banner']}
          </p>
        </div>
        <div>
          <TourDetailsOverview
            selectedTour={selectedTour}
            id={id}
            brand={brand}
          />
        </div>

        {/* ----------- Itinerary ---------- */}
        <p className="text-left text-xs md:text-sm mb-5 pl-7">
          * Prices shown are per person based upon a double occupancy rate
        </p>
        <div className="flex flex-col w-[100%]">
          <ItineraryCard selectedTour={selectedTour} />
        </div>
      </div>
    </>
  )
}

export default AvalonSuccess
