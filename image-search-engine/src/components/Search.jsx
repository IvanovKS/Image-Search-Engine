import './Search.css';

function Search({btnClicked, onChanged, handleSubmit}) {
  return (
    <>
      <h1>Image Search Engine</h1>
      <form name="search-form" action="#" onSubmit={handleSubmit}>
        <input
          onChange={onChanged}
          type="text" 
          className="search-box" 
          placeholder="Search something here..."/>
        <button type="submit" onClick={btnClicked}>Search</button>
      </form>
    </>
  );
}

export default Search

