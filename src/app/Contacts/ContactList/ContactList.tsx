import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

const ContactList = (contacts: Contact) => {
  const list = [
    { firstName: 'Benjamin', lastName: 'Brandon' },
    { firstName: 'Kyler', lastName: 'Wilddog' },
  ];

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
