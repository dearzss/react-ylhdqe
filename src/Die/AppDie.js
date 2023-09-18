import React from 'react';
import ReactDom from 'react-dom';
import Die from './Die.js';
import './Die.css';

export default function AppDie() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  console.log(dice);

  return (
    <main>
      <div className="dice-container">
        {dice.map((die) => (
          <Die value={die} />
        ))}
      </div>
      <button 
        onClick={() => {
          setDice(allNewDice());
        }}
      >
        Roll
      </button>
    </main>
  );
}
