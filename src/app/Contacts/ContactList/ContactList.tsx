import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

const ContactList = (contacts: Contact) => {
  const [contactList, setContactList] = useState([]);

  const list = [
    { firstName: 'Benjamin', lastName: 'Brandon' },
    { firstName: 'Kyler', lastName: 'Wilddog' },
  ];

  console.log('pre sorted list:', list);

  const sort = object => {
    // let contacts = [];
    let sorted = object.sort();
    return sorted;
  };

  return (
    <Container>
      <ListGroup>
        {list.map(contact => {
          return <ListGroupItem>{contact.firstName}</ListGroupItem>;
        })}
      </ListGroup>
    </Container>
  );
};

export default ContactList;
