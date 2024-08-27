import { Link } from 'react-router-dom'
import { useState } from 'react'
import FailedModal from './FailedModal'

const Failed = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="h-[100vh]">
      <div className='bg-center bg-cover bg-[url("/public/ocean.jpg")] h-[50%] rounded-md shadow-inner shadow-black/60'>
        <div className="bg-black/70 h-[100%] w-[100%] flex flex-col justify-center items-center rounded-md">
          <div className="flex flex-col justify-center items-center p-3 w-[100%] h-[30%] text-white animate-fadin">
            <p className="text-3xl font-sans text-shadow-lg">
              We're sorry! This tour is not currently available
            </p>

            <Link to="/tours" className="text-sky-300">
              Back to Home
            </Link>
            <div className="mt-5 text-lg">
              <p>
                Or connect with one of our team members to find the trip your're
                looking for!
              </p>
              <button
                onClick={setOpen}
                className="bg-sky-700 text-white p-3 rounded-md my-4 w-[100%] md:w-[35%]  hover:bg-zinc-900 hover:border-white hover:scale-105 transition-all"
              >
                LETS CONNECT!
              </button>
            </div>
          </div>
          <FailedModal setOpen={setOpen} open={open} />
        </div>
      </div>
    </div>
  )
}

export default Failed
