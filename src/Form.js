import React from 'react';
import ReactDom from 'react-dom';

export default function Form() {
  //const [firstName, setFirstName] = React.useState('');
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
  });

  function handleChange(event) {
    console.log(event.target.value);
  }

  //console.log(firstName);

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
      />
    </form>
  );
}
