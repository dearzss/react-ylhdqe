import React from 'react';
import Die from './Die.js';
import './Die.css';
import { nanoid } from 'nanoid';

export default function AppDie() {
  const [dices, setDices] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dices.every((dice) => dice.isHeld);
    const firstValue = dices[0].value;
    const allSameValue = dices.every((dice) => dice.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log('You won!');
    }
  }, [dices]);

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
    if (!tenzies) {
      setDices(
        dices.map((dice) => {
          if (dice.isHeld) {
            return dice;
          } else {
            return generateNewDice();
          }
        })
      );
    } else {
      setDices(allNewDice());
      setTenzies(false);
    }
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
          {tenzies ? 'New game' : 'Roll'}
        </button>
      </main>
    </>
  );
}

function getCurrentDate(separator = '-') {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let curTime =
    newDate.getHours() +
    ':' +
    newDate.getMinutes() +
    ':' +
    newDate.getSeconds();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}${' '}${curTime}`;
}
