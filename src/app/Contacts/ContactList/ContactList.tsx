import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

const ContactList = (contacts: Contact) => {
  const [contactList, setContactList] = useState([]);

  const list = [
    { firstName: 'Kyler', lastName: 'Wilddog' },
    { firstName: 'Benjamin', lastName: 'Brandon' },
  ];

  console.log('pre sorted list:', list);

  const sort = object => {
    // let contacts = [];
    let sorted = object.sort();
    return sorted;
    console.log('sorted', sorted);
  };

  sort(list);
  ////

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
