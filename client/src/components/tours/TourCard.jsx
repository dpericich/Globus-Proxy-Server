import { Link } from 'react-router-dom'

const TourCard = ({ tour }) => {
  return (
    <div className="flex justify-center w-[100%] animate-fadin">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center w-[90%] animate-fadin shadow-md shadow-zinc-300 mb-10 rounded-b-md">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 shadow-md shadow-zinc-400 rounded-xl border-8 border-transparent p-3 w-[100%] md:w-[80%] hover:border-zinc-100 transition-all"> */}
        <div className="flex flex-col justify-center items-center md:col-span-2">
          <div className="flex justify-center items-center bg-sky-800 py-2 h-[40%] md:h-[30%] w-[100%]">
            <p className="text-sm md:text-2xl text-white font-sans px-3 py-1">
              {tour.Name}
            </p>
          </div>

          <div className="flex justify-center items-center h-[70%] w-[100%]">
            <Link to={`http://localhost:5173/tour-media/${tour.TourNumber}`}>
              <button className="bg-sky-600 text-white text-sm font-sans p-3 rounded-md shadow-md shadow-zinc-300 hover:bg-zinc-300 hover:border-white hover:scale-105 transition-all">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center py-3 bg-zinc-100">
          <img
            src={tour.CoverImage}
            className="h-[135px] w-[240px] md:h-[180px] md:w-[90%] shadow-md shadow-zinc-300 rounded"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default TourCard
