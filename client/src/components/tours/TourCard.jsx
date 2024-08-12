import { Link } from 'react-router-dom'

const TourCard = ({ tour }) => {
  return (
    <div className="w-[100%]">
      <Link
        to={`http://localhost:5173/tour-media/${tour.TourNumber}`}
        className="flex justify-center w-[100%]"
      >
        <div className="shadow-md shadow-zinc-400 rounded-xl border-8 border-transparent p-3 h-[200px] w-[80%] hover:border-zinc-100 transition-all mb-5">
          <div className="flex">
            <p className="text-2xl text-sky-700">{tour.Name}</p>
          </div>
          <div className="flex">
            <div className=" w-[60%] text-left border-2 rounded-md py-2 text-zinc-200 pl-2">
              <p>Content</p>
            </div>
            <div className=" w-[40%] border-2 rounded-md py-2 text-zinc-200">
              <p>Media</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TourCard
