import React from 'react';
import './style.css';

/*
const user = {
  name: 'testing',
  imageUrl: '/react.JPG',
  imageSize: 90,
};

export default function App() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'photo of' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}
*/

//Creating and traversing a list
const numbers = [1, 2, 3, 4, 5];
const updatedNums = numbers.map((number) => {
  return <li key={number.toString()}>{number}</li>;
});

//console.log({ updatedNums });

export default function App() {
  return (
    <div>
      <h1>{updatedNums}</h1>
    </div>
  );
}
