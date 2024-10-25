import { Link } from 'react-router-dom'
import logo from '../../../assets/Safe Travels_LOGO FINAL.png'

const AvalonTourCard = ({ tour, brand }) => {
  const defaultImage = e => {
    e.target.src = logo
  }

  return (
    <Link
      // to={`https://safetravelsggtours.com/tour-media/${tour.TourNumber}/${brand}`}
      to={`http://localhost:5173/avalon/tour-media/${tour.TourNumber}/${brand}`}
      className="flex flex-col justify-center items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 m-4 hover:scale-105 transition-all w-[90%]">
        <div className="flex flex-col justify-center items-center md:col-span-4 bg-sky-700 hover:bg-sky-600 rounded-l-xl shadow-md shadow-zinc-400">
          <p className="text-md md:text-3xl text-white font-sans p-3 md:p-10 py-3">
            {tour?.Name}
          </p>
        </div>
        <div className="flex justify-center items-center bg-zinc-100 md:col-span-1 rounded-r-xl">
          <img
            src={tour?.CoverImage}
            onError={e => defaultImage(e)}
            className="h-[200px] w-[100%] md:h-[160px] md:w-[100%] rounded-r-xl"
          ></img>
        </div>
      </div>
    </Link>
  )
}

export default AvalonTourCard
