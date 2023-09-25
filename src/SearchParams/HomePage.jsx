import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const swCharacters = [
  { name: 'Luke Skywalker', type: 'Jedi' },
  { name: 'Darth Vader', type: 'Sith' },
  { name: 'Emperor Palpatine', type: 'Sith' },
  { name: 'Yoda', type: 'Jedi' },
];

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get('type');
  const displayCharacters = param
    ? swCharacters.filter((char) => char.type.toLowerCase() === param)
    : swCharacters;

  return (
    <main>
      <h2>Home</h2>
      <div>
        <Link to="?type=jedi">Jedi</Link>
        <Link to="?type=sith">Sith</Link>
        <Link to="">Clear</Link>
      </div>
      <hr />
      {displayCharacters.map((char) => (
        <div key={char.name}>
          <h3
            style={{
              color: char.type.toLowerCase() === 'jedi' ? 'blue' : 'red',
            }}
          >
            {char.name}
          </h3>
          <p>{char.type}</p>
          <hr />
        </div>
      ))}
    </main>
  );
}
