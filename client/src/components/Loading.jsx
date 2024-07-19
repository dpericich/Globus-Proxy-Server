import { FaSpinner } from 'react-icons/fa'

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <FaSpinner className="animate-spin text-5xl" />
    </div>
  )
}

export default Loading
