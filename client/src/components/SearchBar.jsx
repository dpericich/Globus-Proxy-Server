const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="bg-zinc-200 flex justify-start p-3 w-[100%]">
      <form
        onSubmit={e => e.preventDefault()}
        className="flex justify-start w-[100%] md:w-[30%]"
      >
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="search tours"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="rounded-md py-1 px-3 w-[100%]"
        />
      </form>
    </div>
  )
}

export default SearchBar
