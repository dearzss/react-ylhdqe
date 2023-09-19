import React from 'react';
import Die from './Die.js';
import './Die.css';

export default function AppDie() {
  return (
    <>
      <main>
        <div className="dice-container">
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
        </div>
      </main>
    </>
  );
}
