import React from 'react';
import ReactDom from 'react-dom';

export default function Form() {
  const [firstName, setFirstName] = React.useState('');

  function handleChange() {
    console.log('changed!');
  }

  return (
    <form>
      <input type="text" placeholder="First Name" onChange={handleChange} />
    </form>
  );
}
