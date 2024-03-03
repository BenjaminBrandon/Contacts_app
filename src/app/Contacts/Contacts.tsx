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
    <Container>
      <SearchBar searchFn={searchFn} search={search} />
    </Container>
  );
};

export default Contacts;
