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
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button
        onClick={(e) => {
          const updatedate = {
            ...selectedContact,
            name: name,
            email: email,
          };
          onSave(updatedate);
        }}
      >
        Save
      </button>
      <button>Reset</button>
    </>
  );
}
