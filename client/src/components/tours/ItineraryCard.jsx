const ItineraryCard = ({ selectedTour }) => {
  const itinerarySummary = item => {
    let itineraryText = item
      ?.split('<SPAN CLASS=subtitle>')[1]
      ?.split('</SPAN>')[1]
      ?.split('</BR>')[0]

    if (itineraryText) {
      return itineraryText
    }

    return item
      ?.split('<SPAN CLASS=location>')[1]
      ?.split('</SPAN>')[1]
      ?.split('</BR>')[0]
  }

  return (
    <>
      <div className="flex flex-col text-left">
        {selectedTour?.data?.Itinerary.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-md shadow-md shadow-zinc-200 p-5 my-2 animate-slidedown500 border-2 border-zinc-100"
          >
            {/* -------- TITLE -------- */}
            <p className="text-zinc-800 text-2xl font-serif font-semibold">
              Day {i + 1}
            </p>
            <p
              className="text-md md:text-xl font-semibold text-sky-700 underline"
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
                __html: itinerarySummary(item),
              }}
            ></p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItineraryCard
