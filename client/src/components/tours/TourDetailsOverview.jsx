const TourDetailsOverview = ({ selectedTour, id, setOpen }) => {
  console.log('This is the selected Tour', selectedTour)
  return (
    <>
      {/* ------------- Title Banner ---------- */}
      <div className="flex flex-col justify-center items-center bg-sky-700 p-10 rounded-t w-[100%] h-[80px]">
        <p className="text-lg md:text-3xl text-white font-sans">
          {selectedTour.data['Length Banner']}
        </p>
      </div>
      {/* ------------- Main Content Row ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] bg-zinc-100">
        {/* ------------- Col 1 ---------- */}
        <div className="col-span-2 px-7 pb-5 text-left animate-fadin">
          <p className="font-semibold text-zinc-800 mt-4 mb-1 text-2xl font-serif">
            Overview
          </p>
          <p className="text-sm md:text-[12pt] leading-6 text-zinc-500">
            {selectedTour.data['Vacation Overview']}
          </p>
        </div>
        {/* ------------- Col 2 ---------- */}
        <div className="flex flex-col justify-center items-center">
          <img
            src={`https://images.globusfamily.com/vacation/${id}.jpg`}
            className="h-[100%]"
          ></img>
        </div>
        {/* ------------- Inner Row ---------- */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] shadow-md bg-zinc-100">
        <div className="flex justify-center items-center p-3 m-2 bg-white shadow-md">
          <p className="text-md">
            <span className="text-2xl text-zinc-800 font-semibold font-serif">
              Duration
            </span>
            <br></br>

            <span className="text-zinc-500 text-xl">
              {selectedTour.data.Itinerary.length} Days
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center p-3 m-2 bg-white shadow-md">
          <p className="text-md">
            <span className="text-2xl text-zinc-800 font-semibold font-serif">
              Meals
            </span>
            <br></br>

            <span className="text-zinc-500 text-xl">
              {selectedTour.data['Meals']}
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center p-3 m-2 bg-white shadow-md">
          <button
            onClick={setOpen}
            className="bg-orange-500 text-white p-3 rounded-md w-[90%] md:w-[80%] shadow-md  shadow-zinc-500 hover:bg-orange-600 hover:border-white hover:scale-105 transition-all"
          >
            LETS CONNECT
          </button>
        </div>
      </div>
    </>
  )
}

export default TourDetailsOverview
