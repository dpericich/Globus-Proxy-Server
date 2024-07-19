const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="border-4 border-zinc-100 rounded-md h-[30%] flex justify-center items-center">
        Banner
      </div>
      <div className="flex justify-center gap-8 p-3">
        <button className="bg-zinc-100 py-1 px-3 border-zinc-100 rounded-xl shadow-md w-[40%] hover:cursor-pointer hover:scale-105 transition-all">
          BUTTON
        </button>
        <button className="bg-zinc-100 py-1 px-3 border-zinc-100 rounded-xl shadow-md w-[40%] hover:cursor-pointer hover:scale-105 transition-all">
          BUTTON
        </button>
      </div>
    </div>
  )
}

export default Home
