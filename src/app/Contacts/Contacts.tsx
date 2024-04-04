'use client';
import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ContactCard from './ContactCard/ContactCard';
import { Card, CardBody, CardHeader } from 'react-bootstrap';

const Contacts = () => {
  const [search, setSearch] = useState<string>('');
  const [contacts, setContacts] = useState({});

  const searchFn = (text: string) => {
    setSearch(text);
  };
  return (
    <div>
      <SearchBar
        searchFn={searchFn}
        search={search}
      />
      <div>
        <ContactCard contact={contacts} />
        <Card>
          <CardHeader>Example Contact Name</CardHeader>
          <CardBody>
            <ul>
              <li>Home Phone Number</li>
              <li>Cell Phone Number</li>
              <li>Work Phone Number</li>
              <li>Email</li>
              <li>Street Address</li>
              <li>City</li>
              <li>State</li>
              <li>Birthday</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;
