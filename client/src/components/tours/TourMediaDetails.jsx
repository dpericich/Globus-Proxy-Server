import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading'
import Modal from './Modal'

const TourMediaDetails = () => {
  const [selectedTour, setSelectedTour] = useState(null)
  const [open, setOpen] = useState(false)
  const { id } = useParams()

  // fetch tourMedia endpoint and pass in in body

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
    console.log('This is selectedTour', selectedTour)
  }, [])

  return (
    <div className="p-10">
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        selectedTour={selectedTour}
      />
      {/* ///// CONVERT TO CARD LATER //////// */}
      {selectedTour === null ? (
        <span>
          <Loading />
        </span>
      ) : selectedTour === undefined ? (
        <span>undefeind</span>
      ) : selectedTour !== null ? (
        <>
          <Link to="/tours">
            <p className="text-right text-xs text-zinc-400 mb-3 pr-2">
              Back to Available Tours
            </p>
          </Link>
          <div className="flex flex-col gap-4 justify-start items-start shadow-md shadow-zinc-300 rounded-xl p-10">
            <p className="text-4xl text-sky-700 font-bold px-2 font-serif">
              {selectedTour.data['Length Banner']}
            </p>

            <div className="rounded text-left text-zinc-500 p-3">
              <p className="text-md text-zinc-700 font-semibold mb-3">
                Tour Details
              </p>
              <p className="text-md mb-3">
                <span className="font-semibold">Meals: </span>

                <span className="text-sky-700">
                  {selectedTour.data['Meals']}
                </span>
              </p>
              <p className="font-semibold mt-4 mb-1 text-lg">Overview</p>
              <p className="text-sm text-zinc-800">
                {selectedTour.data['Vacation Overview']}
              </p>
            </div>

            <div className="w-[100%] flex justify-end">
              <button
                onClick={() => setOpen(!open)}
                className="bg-sky-700 text-white p-3 rounded-md hover:bg-zinc-900 hover:border-white hover:scale-105 transition-all"
              >
                CONNECT
              </button>
            </div>
          </div>
        </>
      ) : (
        <span>Shit</span>
      )}
    </div>
  )
}
export default TourMediaDetails
