import './ShowMore.css';

function ShowMore({isActive}) {
  return (
    <button className={isActive ? "show-btn active" : "show-btn"}>Show more</button>
  );
}

export default ShowMore