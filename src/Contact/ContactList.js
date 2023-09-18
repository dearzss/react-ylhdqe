import React from 'react';

export default function ContactList({ contacts, selectedId, onSelectID }) {
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={(e) => {
                onSelectID(contact.id);
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
