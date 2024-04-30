import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';

const ContactList = (contacts: Contact) => {
  const list = {};

  return (
    <Container>
      <ListGroup>
        {list.map(contact => {
          return <ListGroupItem></ListGroupItem>;
        })}
      </ListGroup>
    </Container>
  );
};

export default ContactList;
