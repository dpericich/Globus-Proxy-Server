import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className="h-screen bg-white">
      <div className='bg-center bg-cover bg-[url("/public/ocean.jpg")] h-[80%] md:h-[60%] md:rounded-md'>
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
            <div className="text-white text-xl w-[100%] mt-5">
              <p>I wish to pay my deposit and secure my trip NOW!</p>
              <button className="rounded-md p-3 text-white bg-sky-700 w-[80%] md:w-[50%] hover:bg-sky-800 hover:scale-105 transition-all text-xl mt-3">
                PAY MY DEPOSIT
              </button>
            </div>

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
