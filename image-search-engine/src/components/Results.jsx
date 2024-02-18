import './Results.css';

function Results({keyword, values}) {
  const images = values.map((el) => (
    <img key={el.id} src={el.urls.small} alt={keyword} />
  ));
  return (
    <div>{images}</div>
  );
}

export default Results
