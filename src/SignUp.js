import React from 'react';
import './signup.css';

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    passwordConfirm: '',
    joinedNewsletter: true,
  });

  console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    /*setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));*/
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form-input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />
        <div>
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form-submit">Sign Up</button>
      </form>
    </div>
  );
}
