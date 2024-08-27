import TourDetailsOverview from './TourDetailsOverview'
import ItineraryCard from './ItineraryCard'

const Success = ({ selectedTour, setOpen, open, id }) => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-start items-start shadow-md shadow-zinc-300 rounded-xl pb-5">
        {/* ----------- Top Banner Content ---------- */}
        <TourDetailsOverview
          selectedTour={selectedTour}
          id={id}
          setOpen={() => setOpen(!open)}
        />

        {/* ----------- Itinerary ---------- */}
        <div className="flex flex-col w-[100%] p-3 bg-zinc-100">
          <ItineraryCard selectedTour={selectedTour} />
        </div>
      </div>
    </>
  )
}

export default Success
