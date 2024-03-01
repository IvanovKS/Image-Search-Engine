import { useState } from 'react'
import Search from './components/Search';
import Results from './components/Results';
import ShowMore from './components/ShowMore';

const accessKey = 'c9wxAKlW2sVGi2gnBgHuo7ITBXcvzCpqzfrYN69nczg';
let page = 1;
let pages = 12;

function App() {
  const [keyword, setKeyword] = useState('');
  const [values, SetValues] = useState([]);

  async function handleClick(e) {
    e.preventDefault();
    try {
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=${pages}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const results = data.results;
      SetValues(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  function handleChange(event) {
    setKeyword(event.target.value);
    pages = 12;
  }
  function handleShowMore() {
    page++;
    pages += 12;
    handleClick();
  }

  return (
    <div>
      <Search btnClicked={handleClick}
              onChanged={handleChange}
              handleSubmit={handleClick}
      />
      <Results  keyword={keyword}
                values={values}
      />
      <ShowMore isActive={values.length !== 0}
                btnShowMoreClicked={handleShowMore}
      />
    </div>
  );
}

export default App