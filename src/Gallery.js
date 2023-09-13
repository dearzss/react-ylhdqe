import React from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [sculptures, setSculptures] = React.useState(sculptureList);
  const [init, setInit] = React.useState(0);
  const [showMore, setShowMore] = React.useState(true);
  return (
    <>
      <button
        onClick={(e) => {
          setInit(init - 1);
        }}
        disabled={init > 0 ? false : true}
      >
        Previous
      </button>
      <button
        onClick={(e) => {
          setInit(init + 1);
        }}
        disabled={init < sculptures.length - 1 ? false : true}
      >
        Next
      </button>
      <h3>
        <i>{sculptures[init].name}</i> by {sculptures[init].artist}
      </h3>
      <b>
        ({init + 1} of {sculptures.length})
      </b>
      <br />
      <button
        onClick={(e) => {
          setShowMore(!showMore);
        }}
      >
        {' '}
        {showMore ? 'Hide' : 'Show'} details
      </button>
      <br />
      {showMore ? sculptures[init].description : ''}
      <img url={sculptures[init].url} alt={sculptures[init].alt}></img>
    </>
  );
}
