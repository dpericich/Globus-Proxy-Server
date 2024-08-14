import { Link } from 'react-router-dom'

const TourCard = ({ tour }) => {
  return (
    <div className="flex justify-center w-[100%] animate-fadin">
      <div className="shadow-md shadow-zinc-400 rounded-xl border-8 border-transparent p-3 w-[80%] hover:border-zinc-100 transition-all mb-5">
        <div className="flex">
          <div className="flex flex-col gap-4 w-[60%] text-left rounded-md py-2 text-zinc-200 pl-2">
            <p className="text-3xl text-sky-700 font-bold">{tour.Name}</p>
            <Link to={`http://localhost:5173/tour-media/${tour.TourNumber}`}>
              <button className="bg-sky-700 text-white font-sans p-3 rounded-md shadow-md shadow-zinc-400 hover:bg-zinc-300 hover:border-white hover:scale-105 transition-all">
                LEARN MORE
              </button>
            </Link>
          </div>
          <div className="flex justify-center w-[40%] rounded-md py-2 text-zinc-200">
            <img
              src={tour.CoverImage}
              className="h-[100%] w-[50%] rounded-md shadow-md"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourCard
