import React from 'react';
import ReactDom from 'react-dom';
import Die from './Die.js';
import './Die.css';
import { nanoid } from 'nanoid';

export default function AppDie() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(count+);
  }, [rollDice]);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log('Won');
    } else {
      console.log('failed');
    }
  }, dice);

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
    if (!tenzies) {
      setDice(
        dice.map((die) => {
          return die.isHeld ? die : generateNewDice();
        })
      );
    } else {
      setDice(allNewDice());
      setTenzies(false);
    }
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
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}
