import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="p-5">
      <p className="mb-3">This page is not found.</p>
      <Link to="/" className="text-sky-700">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
