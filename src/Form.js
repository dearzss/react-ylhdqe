import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

export default function Form() {
  //const [firstName, setFirstName] = React.useState('');
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  console.log(formData);

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <fieldset>
        <legend>Current employment status:</legend>
        <input type="radio" id="unemployed" />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <label for="lname">Last name:</label>
        <label for="email">Email:</label>
        <label for="birthday">Birthday:</label>
      </fieldset>
    </form>
  );
}
