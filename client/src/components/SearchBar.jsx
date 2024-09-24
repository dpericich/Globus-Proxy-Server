const SearchBar = ({ search, setSearch }) => {
  return (
    <>
      <form
        onSubmit={e => e.preventDefault()}
        className="flex justify-start w-[100%] md:w-[80%]"
      >
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search with tour keywords (London, Paris, Spain etc.)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="text-xs md:text-sm rounded-md p-3 w-[100%]"
        />
      </form>
    </>
  )
}

export default SearchBar
