'use client';
import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ContactCard from './ContactCard/ContactCard';
import sampleContacts from '../../../public/sampleContacts';
import { Container, Row } from 'react-bootstrap';
import styles from './contacts.module.scss';

const Contacts = () => {
  const [search, setSearch] = useState<string>('');
  const [contacts, setContacts] = useState(sampleContacts);

  const searchFn = (text: string) => {
    setSearch(text);
    console.log(search);
  };
  return (
    <div className={styles.contactsBody}>
      <SearchBar
        searchFn={searchFn}
        search={search}
      />
      <Container>
        <Row
          md={4}
          gap={5}
        >
          {contacts.map(contact => {
            return <ContactCard nextContact={contact} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;
