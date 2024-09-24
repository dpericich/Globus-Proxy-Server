import { useState, useEffect } from 'react'
import Modal from './Modal'
import TourStats from './TourStats'
import logo from '../../assets/Safe Travels_LOGO FINAL.png'

const TourDetailsOverview = ({ selectedTour, id, brand }) => {
  const [open, setOpen] = useState(false)
  const [priceDates, setPriceDates] = useState(null)

  const defaultImage = e => {
    e.target.src = logo
  }
  //
  useEffect(() => {
    try {
      fetch(
        'https://globus.safetravelsggapi.com/api/v1/globus/get-departures',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ tourNumber: id, brand: brand }),
        }
      )
        .then(res => res.json())
        .then(res => {
          setPriceDates(res)
        })
    } catch (e) {
      console.error(`Error: ${e}`)
    }
  }, [])
  //
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[100%]">
        <div className="flex flex-col justify-between py-5">
          <img
            src={`https://images.globusfamily.com/vacation/${id}.jpg`}
            onError={e => defaultImage(e)}
            className="h-[100%] max-h-[300px] w-[100%] rounded-md"
          ></img>
        </div>
        <div className="col-span-2 md:px-7 md:py-5 text-left">
          <p className="text-sm md:text-[12pt] leading-6 text-zinc-500 mb-3">
            {selectedTour?.data['Vacation Overview']}
          </p>
        </div>
      </div>
      <TourStats
        selectedTour={selectedTour}
        priceDates={priceDates}
        setOpen={setOpen}
      />

      {/* ------------- Modal --------------- */}
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        selectedTour={selectedTour}
        priceDates={priceDates}
      />
    </>
  )
}

export default TourDetailsOverview
