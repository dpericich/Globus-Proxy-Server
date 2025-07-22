import { useState, useEffect, useContext } from "react";
import SearchBar from "../../SearchBar";
import Loading from "../../Loading";
import logo from "../../../../public/avalon.png";
import { filters } from "../../../locationFilters";
import { AvalonToursContext } from "../../../context/AvalonContext";
import AvalonTourCard from "./AvalonTourCard";
import TourCard from "../TourCard";

const AvalonTours = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [search, setSearch] = useState("");
  const brand = "Avalon";
  const { tours } = useContext(AvalonToursContext);
  //
  useEffect(() => {
    setData(tours);
    //
    const startingScroll = localStorage.getItem("scrollPosition");
    setTimeout(() => {
      window.scrollTo({ top: startingScroll });
      //
    }, 0);
    const results = [];
    tours?.forEach((item) => {
      for (let i = 0; i < item.Name.split(" ").length; i++) {
        if (filters.includes(item.Name.split(" ")[i])) {
          results.push(item);
        }
      }
    });
    setFilteredData(results);
  }, [tours]);

  const storeScroll = () => {
    localStorage.setItem("scrollPosition", window.scrollY);
  };

  // render Loading while 'null', else checks for search state and renders based off that
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 grid grid-cols-1 md:grid-cols-2 justify-center items-center w-[100%] py-1 px-3 bg-black/80">
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
          {search === "" ? (
            <div className="">
              {filteredData.map((tour, i) => (
                <div key={i} onClick={storeScroll}>
                  {/* <AvalonTourCard tour={tour} brand={brand} /> */}
                  <TourCard tour={tour} brand={brand} />
                </div>
              ))}
            </div>
          ) : (
            <>
              {data
                .filter((tour) =>
                  tour.Name.toLowerCase().includes(search.toLowerCase())
                )
                .map((tour, i) => (
                  <div key={i} onClick={storeScroll}>
                    {/* <AvalonTourCard tour={tour} brand={brand} /> */}
                    <TourCard tour={tour} brand={brand} />
                  </div>
                ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AvalonTours;
