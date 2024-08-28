import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className="h-screen bg-white">
      <div className='bg-center bg-cover bg-[url("/public/ocean.jpg")] h-[80%] md:h-[50%] md:rounded-md'>
        <div className="bg-black/50 h-[100%] w-[100%] flex flex-col justify-center items-center md:rounded-md">
          <div className="flex flex-col gap-8 justify-center items-center text-white w-[100%] h-[40%] md:h-[70%] md:px-10">
            <p className="text-3xl md:text-6xl font-serif text-shadow-lg">
              THANK YOU!
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center bg-black/40 md:px-40 w-[100%] h-[60%]">
            <p className="text-white text-xl">
              An STGG team member will contact you directly over the next 24
              hours to secure your trip and answer any questions!
            </p>

            <Link to="/" className="text-white text-xl mt-10">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
