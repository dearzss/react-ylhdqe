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
  const [selectID, setSelectID] = React.useState(0);
  const selectedContact = contacts.find((contact) => contact.id === selectID);

  function handleSave(updatedate) {
    setContacts(
      contacts.map((contact) => {
        if (contact.id === updatedate.id) {
          return updatedate;
        } else return contact;
      })
    );
  }

  return (
    <>
      <ContactList
        contacts={contacts}
        selectID={selectID}
        onSelect={(id) => setSelectID(id)}
      />
      <hr />
      <EditContact
        key={selectID}
        selectedContact={selectedContact}
        onSave={handleSave}
      />
    </>
  );
}
