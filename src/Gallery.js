import React from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = React.useState(0);
  const [showMore, setShowMore] = React.useState(true);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handleNextClick() {
    index < 11 ? setIndex(index + 1) : setIndex(index);
  }

  function handlePrevClick() {
    index > 0 ? setIndex(index - 1) : setIndex(index);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick} disabled={index > 0 ? false : true}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={index < 11 ? false : true}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
