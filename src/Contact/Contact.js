import React from 'react';
import ContactList from './ContactList.js';
import EditContact from './EditContact.js';

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

export default function Contact() {
  const [contacts, setContacts] = React.useState(initialContacts);
  const [selectedId, setSelectedId] = React.useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  function onSave(newContact) {
    setContacts(
      contacts.map((contact) => {
        if (contact.id === newContact.id) {
          return newContact;
        } else return contact;
      })
    );
  }

  return (
    <>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelectID={(id) => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedId}
        selectedContact={selectedContact}
        onSave={onSave}
      />
    </>
  );

  console.log(contacts);
}
