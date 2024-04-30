'use client';
import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ContactCard from './ContactCard/ContactCard';
import ContactList from './ContactList/ContactList';
import sampleContacts from '../../../public/sampleContacts';
import { Card, Container, Row } from 'react-bootstrap';
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
      <Container>
        <ContactList />
      </Container>
      <Container className="focusContact">
        <Card>Dummy contact placement</Card>
      </Container>
    </div>
  );
};

export default Contacts;

//Create list items using names in column on left side of app
//create popout for selected name in contact
//create scrollable window seperate from selected focus contact
//add alphabet sections
//create sorting function alphabetically for added contacts
