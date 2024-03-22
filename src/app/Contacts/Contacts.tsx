'use client';
import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import { Card, CardBody, CardHeader } from 'react-bootstrap';

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
      <div>
        <Card>
          <CardHeader>Example Contact Name</CardHeader>
          <CardBody>
            <ul>
              <li>Phone Number</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;
