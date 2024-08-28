import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar'
import Loading from '../Loading'
import TourCard from './TourCard'

const CosmosTours = () => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')

  // useEffect calls fetch for data
  useEffect(() => {
    // fetch('http://localhost:8000/api/v1/globus/get-all-available-tours')
    fetch(
      'https://globus.sldevtestdomain.com/api/v1/globus/get-all-available-tours'
    )
      .then(res => res.json())
      .then(res => setData(res.data.filter(item => item.Brand === 'COSMOS')))
    // console.log('This...', data)
  }, [])

  // render Loading while 'null', else checks for search state and renders based off that
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
                  {' '}
                  <TourCard tour={tour} />
                </div>
              ))}
            </>
          ) : (
            <>
              {/* /////////// RENDERS BY FILTERING SEARCH STATE ////////// */}
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

export default CosmosTours
