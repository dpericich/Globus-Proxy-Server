import { Link } from 'react-router-dom'
import { useState } from 'react'
import FailedModal from './FailedModal'

const Failed = () => {
  const [open, setOpen] = useState(false)
  //

  return (
    <div className="h-screen bg-white">
      <div className='bg-center bg-cover bg-[url("/public/ocean.jpg")] h-[80%] md:h-[60%] md:rounded-md'>
        <div className="bg-black/50 h-[100%] w-[100%] flex flex-col justify-center items-center md:rounded-md">
          <div className="flex flex-col gap-8 justify-center items-center text-white w-[100%] h-[40%] md:h-[70%] md:px-10">
            <p className="text-3xl md:text-6xl font-serif text-shadow-lg">
              SORRY! THIS TOUR IS CURRENTLY UNAVAILABLE.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center bg-black/40 p-3 w-[100%] h-[60%]">
            <p className="text-white text-xl">
              Connect with one of our team members to find the trip your're
              looking for!
            </p>
            <button
              onClick={setOpen}
              className="bg-sky-600 text-white p-3 rounded-md w-[90%] md:w-[35%]  hover:bg-sky-500 hover:border-white hover:scale-105 transition-all"
            >
              LETS CONNECT!
            </button>
            <Link to="/" className="text-white text-xl mt-10">
              Back to Home
            </Link>
          </div>
        </div>
        <FailedModal open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}

export default Failed
