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
    <div className="h-[100vh] bg-white">
      <div className='bg-center bg-cover bg-[url("/public/ocean.jpg")] h-[60%] md:h-[50%] rounded-md'>
        <div className="bg-black/50 h-[100%] w-[100%] flex flex-col justify-center items-center rounded-md">
          <div className="flex flex-col gap-8 justify-center items-center text-white w-[100%] h-[60%] md:h-[70%] md:px-20 animate-fadin">
            <p className="text-3xl md:text-6xl font-sans text-shadow-lg">
              TOUR PORTAL
            </p>
            <p className="text-sm md:text-lg">
              Additional content here... Additional content here... Additional
              content here... Additional content here... Additional content
              here... Additional content here... Additional content here...
              Additional content here... here... Additional content here...
              Additional content here... Additional content here...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center bg-black/60 p-3 rounded-md w-[100%] h-[40%] md:h-[30%]">
            {brandLinks.map((item, i) => (
              <Link key={i} to={item.link}>
                <div className="flex justify-center items-center">
                  <img
                    src={item.image}
                    className="h-[25px] w-[120px] md:h-[35px] md:w-[150px] my-4 hover:scale-105 transition-all animate-fadin"
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
