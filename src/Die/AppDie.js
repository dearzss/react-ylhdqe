import React from 'react';
import Die from './Die.js';
import './Die.css';
import { nanoid } from 'nanoid';

export default function AppDie() {
  const [dices, setDices] = React.useState(allNewDice());

  function generateNewDice() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  function onHeld(heldId) {
    setDices(
      dices.map((dice) => {
        if (dice.id === heldId) {
          return {
            ...dice,
            isHeld: !dice.isHeld,
          };
        } else return dice;
      })
    );
  }

  function rollDice() {
    setDices(
      dices.map((dice) => {
        if (dice.isHeld) {
          return dice;
        } else {
          return generateNewDice();
        }
      })
    );
  }

  return (
    <>
      <main>
        <div className="dice-container">
          {dices.map((dice) => (
            <Die
              value={dice.value}
              key={dice.id}
              isHeld={dice.isHeld}
              onClick={() => {
                onHeld(dice.id);
              }}
            />
          ))}
        </div>
        <br />
        <button className="dice-button" onClick={rollDice}>
          Roll
        </button>
      </main>
    </>
  );
}
