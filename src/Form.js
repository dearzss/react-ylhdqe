import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: true,
    employment: 'unemployed',
    favColor: '',
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

  console.log(formData.favColor);

  return (
    <form>
      <input
        className="common"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        className="common"
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        className="common"
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
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          onChange={handleChange}
          checked={formData.employment === 'unemployed'}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          onChange={handleChange}
          checked={formData.employment === 'part-time'}
        />
        <label htmlFor="part-time">part-time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          value="full-time"
          name="employment"
          onChange={handleChange}
          checked={formData.employment === 'full-time'}
        />
        <label htmlFor="full-time">full-time</label>
        <br />
      </fieldset>
      <br />
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        name="favColor"
        value={formData.favColor}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
    </form>
  );
}
