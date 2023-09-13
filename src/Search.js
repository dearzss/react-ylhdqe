import React from 'react';
import { foods } from './SearchData.js';

export default function Search() {
  const [query, setQuery] = React.useState('');
  const results = foods.filter((item) =>
    item.name
      .split(' ')
      .some((word) => word?.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input
        value={query}
        id="search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <hr />
      <table>
        <tbody>
          {results.map((allFood) => (
            <tr key={allFood.id.toString()}>
              <td>{allFood.name}</td>
              <td>{allFood.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
