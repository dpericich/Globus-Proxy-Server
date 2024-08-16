import { useState } from 'react'
import Modal from './Modal'

const TourDetailsOverview = ({ selectedTour, id }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* ------------- Title Banner ---------- */}
      <div className="flex flex-col justify-center items-center bg-sky-800 p-3 rounded w-[100%] h-[80px]">
        <p className="text-lg md:text-3xl text-white px-2 font-sans">
          {selectedTour.data['Length Banner']}
        </p>
      </div>
      {/* ------------- Main Content Row ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-[100%]">
        {/* ------------- Col 1 ---------- */}
        <div className="col-span-2 p-5 text-left animate-fadin">
          <p className="text-md mb-3">
            <span className="text-2xl text-zinc-500 font-semibold font-serif">
              Meals
            </span>
            <br></br>

            <span className="text-zinc-500">{selectedTour.data['Meals']}</span>
          </p>
          <p className="font-semibold text-zinc-500 mt-4 mb-1 text-2xl font-serif">
            Overview
          </p>
          <p className="text-sm md:text-md text-zinc-500">
            {selectedTour.data['Vacation Overview']}
          </p>
        </div>
        {/* ------------- Col 2 ---------- */}
        <div className="flex flex-col justify-center items-center">
          <img
            src={`https://images.globusfamily.com/vacation/${id}.jpg`}
            className="h-[80%] rounded-md shadow-md"
          ></img>
          {/* -------- Contact Button --------- */}
          <button
            onClick={() => setOpen(!open)}
            className="bg-sky-700 text-white p-3 rounded-md my-4 w-[90%] hover:bg-zinc-900 hover:border-white hover:scale-105 transition-all"
          >
            CONNECT
          </button>
        </div>
        {/* -------- Contact Modal --------- */}
        <Modal
          open={open}
          onClose={() => setOpen(!open)}
          selectedTour={selectedTour}
        />
      </div>
    </>
  )
}

export default TourDetailsOverview
