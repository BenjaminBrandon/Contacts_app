'use client';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar/SearchBar';
import AddContact from './AddContact/AddContact';

const Contacts = () => {
  const [search, setSearch] = useState<string>('');

  const searchFn = (text: string) => {
    setSearch(text);
  };
  return (
    <div>
      <SearchBar
        searchFn={searchFn}
        search={search}
      />
      <AddContact />
    </div>
  );
};

export default Contacts;
