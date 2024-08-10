const TourCard = ({ tour }) => {
  return (
    <div className="flex justify-center items-center shadow-md shadow-zinc-300 rounded-xl p-3 mb-2 hover:cursor-pointer hover:bg-zinc-100 transition-all">
      {tour.Name}
    </div>
  )
}

export default TourCard
