import { useState } from 'react'
import Search from './components/Search';
import Results from './components/Results';
import ShowMore from './components/ShowMore';

function App() {
  const [keyword, setKeyword] = useState('');
  const [values, SetValues] = useState([]);

  const accessKey = 'c9wxAKlW2sVGi2gnBgHuo7ITBXcvzCpqzfrYN69nczg';
  let page = 1;

  async function handleClick() {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    SetValues(results);
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <Search btnClicked={handleClick}
              onChanged={handleChange}
      />
      <Results  keyword={keyword}
                values={values}
      />
      <ShowMore isActive={values.length !== 0}/>
    </div>
  );
}

export default App