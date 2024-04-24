'use client';
import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ContactCard from './ContactCard/ContactCard';
import sampleContacts from '../../../public/sampleContacts';

const Contacts = () => {
  const [search, setSearch] = useState<string>('');
  const [contacts, setContacts] = useState(sampleContacts);

  const searchFn = (text: string) => {
    setSearch(text);
    console.log(search);
  };
  return (
    <div>
      <SearchBar
        searchFn={searchFn}
        search={search}
      />
      <div>
        {contacts.map(contact => {
          return <ContactCard nextContact={contact} />;
        })}
      </div>
    </div>
  );
};

export default Contacts;
