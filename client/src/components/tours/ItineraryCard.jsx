const ItineraryCard = ({ selectedTour }) => {
  return (
    <>
      <div className="flex flex-col text-left">
        {selectedTour.data.Itinerary.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-md bg-zinc-100 shadow-md shadow-zinc-200 p-2 my-2 animate-slidedown500"
          >
            {/* {item} */}
            {/* -------- TITLE -------- */}
            <p className="text-zinc-500 text-sm italic">Day {i + 1}</p>
            <p
              className="text-md md:text-xl font-semibold text-sky-700"
              dangerouslySetInnerHTML={{
                __html: item
                  ?.split('</SPAN>')[0]
                  .split('<SPAN CLASS=LOCATION>'),
              }}
            ></p>
            {/* -------- BODY -------- */}
            <p
              className="text-md text-zinc-500"
              dangerouslySetInnerHTML={{
                __html: item?.split('</SPAN>')[1].split('</BR>')[0],
              }}
            ></p>

            {/* <img
                    src={`https://images.globusfamily.com/vacation/${
                      item.split('dayimage>')[1].split('</SPAN>')[0]
                    }}`}
                    className="h-30 w-30"
                  ></img> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default ItineraryCard
