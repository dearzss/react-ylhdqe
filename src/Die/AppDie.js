import React from 'react';
import ReactDom from 'react-dom';
import Die from './Die.js';
import './Die.css';
import { nanoid } from 'nanoid';

export default function AppDie() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function holdDice(id) {
    setDice(
      dice.map((die) => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld,
          };
        } else return die;
      })
    );
  }

  return (
    <main>
      <div className="dice-container">
        {dice.map((die) => (
          <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
          />
        ))}
      </div>
      <br />
      <button
        className="dice-button"
        onClick={() => {
          setDice(allNewDice());
        }}
      >
        Roll
      </button>
    </main>
  );
}
