import { useState, useLayoutEffect, useContext } from "react";
import { CosmosToursContext } from "../../context/CosmosContext";
import SearchBar from "../SearchBar";
import Loading from "../Loading";
import TourCard from "./TourCard";
import logo from "../../../public/cosmos.png";
import { filters } from "../../locationFilters";

const CosmosTours = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [search, setSearch] = useState("");
  const brand = "Cosmos";
  const { tours } = useContext(CosmosToursContext);

  // useEffect(() => {
  //   setData(tours);
  //   //
  //   const startingScroll = parseInt(localStorage.getItem("scrollPosition"));
  //   setTimeout(() => {
  //     window.scrollTo({ top: startingScroll });
  //   }, 0);
  //   //
  //   const results = [];
  //   tours?.forEach((item) => {
  //     for (let i = 0; i < item.Name.split(" ").length; i++) {
  //       if (filters.includes(item.Name.split(" ")[i])) {
  //         results.push(item);
  //       }
  //     }
  //   });
  //   setFilteredData(results);
  // }, [tours]);

  // const storeScroll = () => {
  //   console.log("CLICKED");
  //   // localStorage.clear();
  //   localStorage.setItem("scrollPosition", window.scrollY);
  // };
  useLayoutEffect(() => {
    // Set your data state from context
    setData(tours);
    // Filter data immediately after setting data
    const results = [];
    tours?.forEach((item) => {
      for (let i = 0; i < item.Name.split(" ").length; i++) {
        if (filters.includes(item.Name.split(" ")[i])) {
          results.push(item);
        }
      }
    });
    setFilteredData(results);

    // Restore scroll position - note 10 for "base 10" - also uses fallback "0" so doesn't scroll to invalid place.
    const startingScroll =
      parseInt(localStorage.getItem("scrollPosition"), 10) || 0;

    // Add a slightly longer timeout for mobile reliability
    setTimeout(() => {
      window.scrollTo({ top: startingScroll });
    }, 100); // You can try 0, 50, or 100ms depending on device behavior
  }, [tours]);
  const storeScroll = () => {
    localStorage.setItem("scrollPosition", window.scrollY);
  };

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
              {filteredData?.map((tour, i) => (
                <div key={i} onClick={storeScroll}>
                  <TourCard tour={tour} brand={brand} />
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredData
                ?.filter((tour) =>
                  tour.Name.toLowerCase().includes(search.toLowerCase())
                )
                .map((tour, i) => (
                  <div key={i} onClick={storeScroll}>
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

export default CosmosTours;
