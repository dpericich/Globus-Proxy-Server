const ItineraryCard = ({ selectedTour }) => {
  console.log(
    'this is the image',
    `https://images.globusfamily.com/vacation/
    ${selectedTour.data.Itinerary[0].split('dayimage>')[1].split('</SPAN>')[0]}
  `
  )
  return (
    <>
      <div className="flex flex-col text-left">
        {selectedTour.data.Itinerary.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-md bg-white shadow-md shadow-zinc-200 p-5 my-2 animate-slidedown500"
          >
            {/* {item} */}
            {/* -------- TITLE -------- */}
            <p className="text-zinc-800 text-2xl font-serif font-semibold">
              Day {i + 1}
            </p>
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
                __html: item
                  ?.split('<SPAN CLASS=subtitle>')[1]
                  .split('</SPAN>')[1]
                  .split('</BR>')[0],
              }}
            ></p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItineraryCard
