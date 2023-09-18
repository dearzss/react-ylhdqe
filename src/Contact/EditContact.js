import React from 'react';
export default function EditContact({ selectedContact, onSave }) {
  const [name, setName] = React.useState(selectedContact.name);
  const [email, setEmail] = React.useState(selectedContact.email);
  return (
    <>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <br />
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={(e) => {
          const newContact = {
            ...selectedContact,
            name: name,
            email: email,
          };
          onSave(newContact);
        }}
      >
        Save
      </button>
      <button
        onClick={(e) => {
          setName(selectedContact.name), setEmail(selectedContact.email);
        }}
      >
        Reset
      </button>
    </>
  );
}
