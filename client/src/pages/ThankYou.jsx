import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className="h-[100vh]">
      <div className='bg-center bg-cover bg-[url("/public/ocean.jpg")] h-[50%] rounded-md shadow-inner shadow-black/60'>
        <div className="bg-black/50 h-[100%] w-[100%] flex flex-col justify-center items-center rounded-md">
          <div className="flex flex-col justify-center items-center p-3 w-[100%] h-[30%] text-white animate-fadin">
            <p className="text-7xl font-sans text-shadow-lg">THANK YOU!</p>
            <p className="text-xl px-40 mt-10">
              An STGG team member will contact you directly over the next 24
              hours to secure your trip and answer any questions!
            </p>
            <Link
              className="mt-10 hover:text-sky-300 transition-all"
              to="/tours"
            >
              Back to Tours
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
