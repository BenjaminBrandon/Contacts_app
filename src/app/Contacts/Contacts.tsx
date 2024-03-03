'use client';
import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import { Container } from 'react-bootstrap';

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
    </div>
  );
};

export default Contacts;
