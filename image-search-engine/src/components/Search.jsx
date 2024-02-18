import './Search.css';

function Search({btnClicked, onChanged}) {
  return (
    <>
      <h1>Image Search Engine</h1>
      <form name="search-form" action="#">
        <input
          onChange={onChanged}
          type="text" 
          className="search-box" 
          placeholder="Search something here..."/>
        <button onClick={btnClicked}>Search</button>
      </form>
    </>
  );
}

export default Search

