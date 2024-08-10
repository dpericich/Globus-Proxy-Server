const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="bg-sky-800 flex justify-start p-3">
      <form
        onSubmit={e => e.preventDefault()}
        className="flex justify-start w-[50%]"
      >
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="search tours"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="rounded-md py-1 px-3 w-[80%]"
        />
      </form>
    </div>
  )
}

export default SearchBar
