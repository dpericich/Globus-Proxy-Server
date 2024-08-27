import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer inset-x-0 bottom-0 flex flex-col gap-2 bg-sky-700 text-white py-2 px-5">
      <div className="flex flex-col justify-center items-center py-4 w-[100%]">
        {/* <img
          className="h-[30%] w-[10%] max-h-[40px] max-w-[60px] mb-1"
          src={panther}
        ></img> */}
        <Link to="/">HOME</Link>
      </div>
    </div>
  )
}

export default Footer
