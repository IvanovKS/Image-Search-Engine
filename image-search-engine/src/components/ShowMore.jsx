import './ShowMore.css';

function ShowMore({isActive, btnShowMoreClicked}) {
  return (
    <button onClick={btnShowMoreClicked}
            className={isActive ? "show-btn active" : "show-btn"}>Show more</button>
  );
}

export default ShowMore