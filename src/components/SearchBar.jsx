export default function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    <div className="py-7">
      <input
        name="searchbar"
        id="Search-bar"
        type="text"
        className="border"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
}
