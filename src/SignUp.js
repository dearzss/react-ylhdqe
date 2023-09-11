import React from 'react';
import './signup.css';

function handleSubmit(event) {
  event.preventDefault();
}

function handleChange(event) {
  console.log(event.target);
}

export default function SignUp() {
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form-input"
          name="passwordConfirm"
          onChange={handleChange}
        />
        <div>
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
      </form>
    </div>
  );
}
