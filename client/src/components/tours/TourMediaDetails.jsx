import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading'
import TourDetailsOverview from './TourDetailsOverview'
import ItineraryCard from './ItineraryCard'
import Modal from './Modal'

const TourMediaDetails = () => {
  const [selectedTour, setSelectedTour] = useState(null)
  const [open, setOpen] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/globus/get-tour-media', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ tourNumber: id }),
    })
      .then(res => res.json())
      .then(res => setSelectedTour(res))
  }, [])

  return (
    <div className="py-3">
      {selectedTour === null ? (
        <span>
          <Loading />
        </span>
      ) : selectedTour === undefined ? (
        <span>undefeind</span>
      ) : selectedTour !== null ? (
        <>
          <div className="flex flex-col gap-4 justify-start items-start shadow-md shadow-zinc-300 rounded-xl pb-5">
            {/* ----------- Top Banner Content ---------- */}
            <TourDetailsOverview
              selectedTour={selectedTour}
              id={id}
              setOpen={() => setOpen(!open)}
            />

            {/* ----------- Itinerary ---------- */}
            <div className="flex flex-col w-[100%] px-5">
              <p className="font-semibold text-zinc-500 text-left mt-4 mb-1 text-2xl font-serif animate-fadin">
                ITINERARY
              </p>
              <ItineraryCard selectedTour={selectedTour} />
            </div>
          </div>
        </>
      ) : (
        <span></span>
      )}
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        selectedTour={selectedTour}
      />
    </div>
  )
}
export default TourMediaDetails
