import { useState, useEffect, useContext } from 'react'
import { CosmosToursContext } from '../../context/CosmosContext'
import SearchBar from '../SearchBar'
import Loading from '../Loading'
import TourCard from './TourCard'
import logo from '../../../public/cosmos.png'
import { filters } from '../../locationFilters'
import { useLocation } from 'react-router-dom'

const CosmosTours = () => {
  const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [search, setSearch] = useState('')
  const [season, setSeason] = useState(null)
  const brand = 'Cosmos'
  //
  const { tours } = useContext(CosmosToursContext)
  // set scroll position state
  // const [scrollPosition, setScrollPosition] = useState()
  const location = useLocation()

  //
  window.addEventListener('scroll', console.log('This shit', window.scrollY))
  useEffect(() => {
    // will set position on current Y
    // const handleScroll = () => setScrollPosition(window.scrollY)
    // //
    // window.addEventListener('scroll', handleScroll)
    //
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
    // window.scrollTo(0, 0)
    // return () => window.removeEventListener('scroll', handleScroll)
  }, [tours])
  //
  // useEffect(() => {
  //   // Scroll to the saved position
  //   window.scrollTo(0, scrollPosition)
  // }, [scrollPosition])

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
              {/* {data.map((tour, i) => ( */}
              {filteredData?.map((tour, i) => (
                <div key={i}>
                  <TourCard tour={tour} brand={brand} season={season} />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* /////////// OTHERWISE FILTER BY SEARCH ////////// */}
              {/* {data */}
              {filteredData
                ?.filter(tour =>
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
