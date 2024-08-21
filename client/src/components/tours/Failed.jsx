import { Link } from 'react-router-dom'

const Failed = () => {
  return (
    <div className="h-[100vh]">
      <div className='bg-center bg-cover bg-[url("/public/ocean.jpg")] h-[50%] rounded-md shadow-inner shadow-black/60'>
        <div className="bg-black/50 h-[100%] w-[100%] flex flex-col justify-center items-center rounded-md">
          <div className="flex flex-col justify-center items-center p-3 w-[100%] h-[30%] text-white">
            <p className="text-7xl font-sans text-shadow-lg">FAILED!</p>
            <p>One of our team members will connect with you shortly!</p>
            <Link to="/tours">Back to Tours</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Failed
