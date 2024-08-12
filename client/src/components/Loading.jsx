import { FaSpinner } from 'react-icons/fa'

const Loading = () => {
  return (
    <div className="h-[50vh] flex justify-center items-center">
      <FaSpinner className="animate-spin text-7xl text-sky-700" />
    </div>
  )
}

export default Loading
