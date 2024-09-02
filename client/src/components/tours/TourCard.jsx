import { Link } from 'react-router-dom'

const TourCard = ({ tour }) => {
  return (
    <Link
      to={`http://localhost:5173/tour-media/${tour.TourNumber}`}
      className="flex flex-col justify-center items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 m-4 shadow-md shadow-zinc-400  hover:scale-105 transition-all w-[90%]">
        <div className="flex flex-col justify-center items-center md:col-span-4 bg-sky-700 hover:bg-sky-600">
          <p className="text-md md:text-3xl text-white font-sans p-3 md:p-10 py-3">
            {tour?.Name}
          </p>
        </div>
        <div className="flex justify-center items-center bg-zinc-100 md:col-span-1">
          <img
            src={tour?.CoverImage}
            className="h-[200px] w-[100%] md:h-[160px] md:w-[100%]"
          ></img>
        </div>
      </div>
    </Link>
  )
}

export default TourCard
