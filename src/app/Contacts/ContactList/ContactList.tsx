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
    let listSorted = object.sort((a, b) => {
      const nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
      const nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    console.log(listSorted);
  };

  //sort(list);
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
