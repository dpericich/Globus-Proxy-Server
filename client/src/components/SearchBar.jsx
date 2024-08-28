const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="bg-zinc-200 flex justify-start p-3 w-[100%]">
      <form
        onSubmit={e => e.preventDefault()}
        className="flex justify-start w-[100%] md:w-[45%]"
      >
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search with tour keywords (California, London, Paris etc.)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="text-xs md:text-sm rounded-md p-3 w-[100%]"
        />
      </form>
    </div>
  )
}

export default SearchBar
