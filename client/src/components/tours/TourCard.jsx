import { Link } from 'react-router-dom'

const TourCard = ({ tour }) => {
  return (
    <Link to={`http://localhost:5173/tour-media/${tour.TourNumber}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 m-2 rounded-md shadow-md shadow-zinc-400 animate-fadin hover:scale-105 transition-all">
        <div className="flex flex-col justify-center items-center md:col-span-3 bg-sky-700">
          <p className="text-sm md:text-3xl text-white font-sans px-3 py-1">
            {tour.Name}
          </p>
        </div>
        <div className="flex justify-center items-center py-3 bg-zinc-100 md:col-span-1">
          <img
            src={tour.CoverImage}
            className="h-[135px] w-[240px] md:h-[100px] md:w-[60%] rounded"
          ></img>
        </div>
      </div>
    </Link>
  )
}

export default TourCard
