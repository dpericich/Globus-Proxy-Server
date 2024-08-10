import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import Loading from '../components/Loading'
import TourCard from '../components/TourCard'

const AvailableTours = () => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/globus/get-all-available-tours')
      .then(res => res.json())
      .then(res => setData(res.data.filter(item => item.Brand === 'GLOBUS')))
    console.log('This shit right heeeer...', data)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[100%]">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="py-3 w-[100%]">
        {' '}
        {data === null ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            {data
              .filter(tour =>
                tour.Name.toLowerCase().includes(search.toLowerCase())
              )
              .map((tour, i) => (
                <TourCard key={i} tour={tour} />
              ))}
          </>
        )}
      </div>
    </div>
  )
}

export default AvailableTours
