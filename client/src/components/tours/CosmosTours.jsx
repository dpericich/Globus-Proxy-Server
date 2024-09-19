import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar'
import Loading from '../Loading'
import TourCard from './TourCard'
import logo from '../../../public/cosmos.png'

const CosmosTours = () => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')
  const [season, setSeason] = useState(null)
  const brand = 'Cosmos'

  useEffect(() => {
    // fetch('http://localhost:8000/api/v1/globus/get-all-available-tours')
    // fetch(
    //   'https://globus.sldevtestdomain.com/api/v1/globus/get-all-available-tours'
    // )
    fetch(
      'https://globus.safetravelsggapi.com/api/v1/globus/get-all-available-tours'
    )
      .then(res => res.json())
      .then(res => setData(res.data.filter(item => item.Brand === 'COSMOS')))
  }, [])
  console.log('this is the data', data)

  // render Loading while 'null', else checks for search state and renders based off that
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-[100%] py-1 px-3 bg-zinc-200">
        <div className="flex justify-start items-center my-1">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <img src={logo} className="h-[20px] md:h-[27px] my-2"></img>
        </div>
      </div>

      {data === null ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="">
          {/* /////////// IF SEARCH EMPTY RENDER ALL ////////// */}
          {search === '' ? (
            <div className="">
              {data.map((tour, i) => (
                <div key={i}>
                  <TourCard tour={tour} brand={brand} season={season} />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* /////////// OTHERWISE FILTER BY SEARCH ////////// */}
              {data
                .filter(tour =>
                  tour.Name.toLowerCase().includes(search.toLowerCase())
                )
                .map((tour, i) => (
                  <div key={i}>
                    <TourCard tour={tour} brand={brand} season={season} />
                  </div>
                ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default CosmosTours
