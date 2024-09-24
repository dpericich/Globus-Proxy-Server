import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar'
import Loading from '../Loading'
import TourCard from './TourCard'
import logo from '../../../public/avalon.png'
import { Link } from 'react-router-dom'

const AvalonTours = () => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')
  const brand = 'Avalon'

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  // useEffect calls fetch for data
  // useEffect(() => {
  //   fetch('https://globus.safetravelsggapi.com/api/v1/globus/get-avalon-tours')
  //     .then(res => res.json())
  //     .then(res => setData(res.data))
  //   console.log('This is avalon...', data)
  // }, [])

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
      <div className="h-96 flex flex-col gap-4 justify-center">
        <p className="text-2xl md:text-5xl text-sky-700">COMING SOON</p>
        <Link to="/">Back to Home</Link>
      </div>

      {/* {data === null ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="">
          {search === '' ? (
            <div className="">
              {data.map((tour, i) => (
                <div key={i}>
                  <TourCard tour={tour} brand={brand} />
                </div>
              ))}
            </div>
          ) : (
            <>
              {data
                .filter(tour =>
                  tour.Name.toLowerCase().includes(search.toLowerCase())
                )
                .map((tour, i) => (
                  <div key={i}>
                    <TourCard tour={tour} brand={brand} />
                  </div>
                ))}
            </>
          )}
        </div>
      )} */}
    </div>
  )
}

export default AvalonTours
