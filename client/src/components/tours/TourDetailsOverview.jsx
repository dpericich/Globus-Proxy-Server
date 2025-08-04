// 10/17 They reported that a single freaking Tour overview (Oh My Goddess: Greece) was displaying rando HTML chars so we'll check the overviews and use a filterOverview function
import { useState, useEffect } from "react";
import Modal from "./Modal";
import TourStats from "./TourStats";
import logo from "../../assets/Safe Travels_LOGO FINAL.png";

const TourDetailsOverview = ({ selectedTour, id, brand }) => {
  const [open, setOpen] = useState(false);
  const [prices, setPrices] = useState(null);
  const [priceDates, setPriceDates] = useState(null);

  const defaultImage = (e) => {
    e.target.src = logo;
  };

  // TRYING GET DEPARTURES BY SEASON HERE TO NO AVAIL
  useEffect(() => {
    try {
      fetch(
        // 'https://globus.safetravelsggapi.com/api/v1/globus/get-departures-by-season',
        // 'https://globus.safetravelsggapi.com/api/v1/globus/get-departures',
        // "http://localhost:8000/api/v1/globus/get-departures",
        "https://globus-proxy-server.onrender.com/api/v1/globus/get-departures",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          // body: JSON.stringify({
          //   tourNumber: id,
          //   brand: brand,
          //   season: '2025',
          // }),
          body: JSON.stringify({ tourNumber: id, brand: brand }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setPriceDates(res);
          setPrices(res.data?.map((item) => Number(item.landOnlyPrice)));
        });
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }, []);

  // filtering out rando HTML chars from overview ('Oh My Goddess!: Greece By Design )
  const filterOverview = (overview) => {
    return `${overview?.split("</BR></BR><SPAN")[0]}
       Why ${overview?.split("CLASS=choice>Why")[1]}`;
  };
  //
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[100%]">
        <div className="flex flex-col justify-between py-5">
          <img
            src={`https://images.globusfamily.com/vacation/${id}.jpg`}
            onError={(e) => defaultImage(e)}
            className="h-[100%] max-h-[300px] w-[100%] rounded-md"
          ></img>
        </div>
        <div className="col-span-2 md:px-7 md:py-5 text-left">
          <p className="text-sm md:text-[12pt] leading-6 text-zinc-500 mb-3">
            {/* CHECKING FROM RANDO HTML - if true, using dangerouslySetInnerHTML */}
            {selectedTour?.data["Vacation Overview"]
              .split(" ")
              .includes("CLASS=choice>Why") ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: filterOverview(
                    selectedTour?.data["Vacation Overview"]
                  ),
                }}
              ></span>
            ) : (
              <span>{selectedTour?.data["Vacation Overview"]}</span>
            )}
          </p>
        </div>
      </div>
      <TourStats
        selectedTour={selectedTour}
        priceDates={priceDates}
        prices={prices}
        setOpen={setOpen}
      />

      {/* ------------- Modal --------------- */}
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        selectedTour={selectedTour}
        priceDates={priceDates}
      />
    </>
  );
};

export default TourDetailsOverview;
