import React from 'react';

export default function ContactList({ contacts, selectID, onSelect }) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id.toString()}>
            <button
              onClick={(e) => {
                onSelect(contact.id);
              }}
            >
              {selectID === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
