import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar'
import Loading from '../Loading'
import TourCard from './TourCard'

const AvailableTours = () => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    // fetch('http://localhost:8000/api/v1/globus/get-all-available-tours')
    fetch(
      'https://globus.sldevtestdomain.com/api/v1/globus/get-all-available-tours'
    )
      .then(res => res.json())
      .then(res => setData(res.data))
    console.log('This...', data)
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-5">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {data === null ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {/* /////////// IF SEARCH EMPTY RENDER ALL ////////// */}
          {search === '' ? (
            <>
              {data.map((tour, i) => (
                <div key={i}>
                  <TourCard tour={tour} />
                </div>
              ))}
            </>
          ) : (
            <>
              {/* /////////// OTHERWISE FILTER BY SEARCH ////////// */}
              {data
                .filter(tour =>
                  tour.Name.toLowerCase().includes(search.toLowerCase())
                )
                .map((tour, i) => (
                  <div key={i}>
                    <TourCard tour={tour} />
                  </div>
                ))}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default AvailableTours
