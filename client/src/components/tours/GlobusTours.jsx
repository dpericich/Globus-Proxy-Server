// calling the data in context and then filtering in component with use effect

import { useState, useEffect, useContext } from 'react'
import { ToursContext } from '../../context/ToursContext'
import SearchBar from '../SearchBar'
import Loading from '../Loading'
import TourCard from './TourCard'
import logo from '../../../public/globus.png'
import { filters } from '../../locationFilters'

const GlobusTours = () => {
  const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [search, setSearch] = useState('')
  //
  const { tours } = useContext(ToursContext)
  console.log('This is the tours....', tours)

  useEffect(() => {
    setData(tours)
    const results = []

    tours?.forEach(item => {
      for (let i = 0; i < item.Name.split(' ').length; i++) {
        if (filters.includes(item.Name.split(' ')[i])) {
          results.push(item)
        }
      }
    })
    setFilteredData(results)
    console.log('This is filteredData.....', filteredData)
  }, [tours])

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
          {search === '' ? (
            <div className="">
              {filteredData?.map((tour, i) => (
                <div key={i}>
                  <TourCard tour={tour} />
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredData
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
        </div>
      )}
    </div>
  )
}

export default GlobusTours
