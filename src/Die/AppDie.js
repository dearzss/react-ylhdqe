import React from 'react';
import ReactDom from 'react-dom';
import Die from './Die.js';
import './Die.css';
import { nanoid } from 'nanoid';

export default function AppDie() {
  const [dice, setDice] = React.useState(allNewDice());

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
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

  function rollDice() {
    setDice(
      dice.map((die) => {
        return die.isHeld ? die : generateNewDice();
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
          rollDice();
        }}
      >
        Roll
      </button>
    </main>
  );
}
