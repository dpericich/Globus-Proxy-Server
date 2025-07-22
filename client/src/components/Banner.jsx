import { Link } from "react-router-dom";
import globusLogo from "../../public/globus.png";
import avalonLogo from "../../public/avalon.png";
import cosmosLogo from "../../public/cosmos.png";

const brandLinks = [
  { image: globusLogo, link: "/globus-tours" },
  { image: avalonLogo, link: "/avalon-tours" },
  { image: cosmosLogo, link: "/cosmos-tours" },
];

const Banner = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
  };
  return (
    <div className="h-screen bg-white">
      <div className='bg-center bg-cover bg-[url("/public/ocean.jpg")] h-[90%] md:h-[60%] md:rounded-md'>
        <div className="bg-black/50 h-[100%] w-[100%] flex flex-col justify-center items-center md:rounded-md">
          <div className="flex flex-col gap-8 justify-center items-center text-white w-[100%] h-[50%] md:h-[70%] md:px-10">
            <p className="text-3xl md:text-7xl font-serif text-shadow-lg">
              EXPLORE, IMMERSE, EDUCATE
            </p>
            <div className="flex flex-col justify-center items-center gap-4 text-md md:text-xl p-2">
              <p className="">
                Your quest to discover a unique travel agency has come to an
                end.
              </p>
              <p>You have searched and found us!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center bg-black/60 p-3 h-[50%] w-[100%] md:h-[30%]">
            {brandLinks.map((item, i) => (
              <Link key={i} to={item.link} onClick={clearLocalStorage}>
                <div className="flex justify-center items-center">
                  <img
                    src={item.image}
                    className="h-[65px] w-[170px] md:h-[85px] md:w-[300px] border-4 rounded-md p-3 my-4 hover:scale-105 hover:border-sky-500 transition-all"
                  ></img>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
