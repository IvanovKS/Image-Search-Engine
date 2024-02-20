import './Results.css';

function Results({keyword, values}) {
  const images = values.map((el) => (
    <a key={el.id} href={el.links.html} target='_blank' rel="noreferrer">
      <img key={el.id} src={el.urls.small} alt={keyword} />
    </a>
  ));
  return (
    <div className="search-results">{images}</div>
  );
}

export default Results
