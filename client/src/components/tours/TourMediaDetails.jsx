import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading'
import TourDetailsOverview from './TourDetailsOverview'
import ItineraryCard from './ItineraryCard'

const TourMediaDetails = () => {
  const [selectedTour, setSelectedTour] = useState(null)
  const [expand, setExpand] = useState(false)
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
    <div className="p-10">
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
            <TourDetailsOverview selectedTour={selectedTour} id={id} />

            {/* ----------- Itinerary ---------- */}
            <div className="flex flex-col w-[100%] px-5">
              <div className={`${expand ? 'invisible' : 'visible'}`}>
                <button
                  className={`border-4 border-sky-700 text-sky-700 p-3 rounded-md hover:bg-zinc-500 hover:text-white w-[50%] hover:scale-105  transition-all`}
                  onClick={() => setExpand(!expand)}
                >
                  VIEW ITINERARY
                </button>
              </div>

              {expand ? (
                <>
                  <ItineraryCard selectedTour={selectedTour} />
                </>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </>
      ) : (
        <span></span>
      )}
    </div>
  )
}
export default TourMediaDetails
