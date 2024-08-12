import { Link } from 'react-router-dom'
import globusLogo from '../../public/globus.png'
import avalonLogo from '../../public/avalon.png'
import cosmosLogo from '../../public/cosmos.png'

const brandLinks = [
  { image: globusLogo, link: '/globus-tours' },
  { image: avalonLogo, link: '/avalon-tours' },
  { image: cosmosLogo, link: '/cosmos-tours' },
]

const Banner = () => {
  return (
    <div className="h-[100vh]">
      <div className='bg-center bg-cover bg-[url("/public/ocean.jpg")] h-[40%] rounded-md'>
        <div className="bg-black/50 h-[100%] w-[100%] flex flex-col justify-center items-center rounded-md">
          <div className="flex justify-center py-20 w-[100%] h-[40%] ">
            <p className="text-7xl text-white font-sans text-shadow-lg">
              TOUR PORTAL
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 w-[100%] h-[40%]">
            <Link to="/available-tours" className="w-[100%]">
              <button className="border-4 rounded-md p-3 text-white bg-transparent w-[50%] hover:bg-white/60 hover:scale-105 transition-all text-3xl animate-slidedown700">
                ALL AVAILABLE TOURS
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center bg-black/60 p-3 rounded-md w-[100%] h-[20%]">
            {brandLinks.map((item, i) => (
              <Link key={i} to={item.link}>
                <div className="flex justify-center items-center">
                  <img
                    src={item.image}
                    className="h-[30px] w-[150px] hover:scale-105 transition-all"
                  ></img>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
