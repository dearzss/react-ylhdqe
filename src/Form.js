import React from 'react';
import ReactDom from 'react-dom';

export default function Form() {
  const [firstName, setFirstName] = React.useState('');

  function handleChange(event) {
    console.log(event);
  }

  return (
    <form>
      <input type="text" placeholder="First Name" onChange={handleChange} />
    </form>
  );
}
