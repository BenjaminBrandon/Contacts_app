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
      const nameA = a.firstName.toUpperCase();
      const nameB = b.firstName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
    // setContactList(listSorted);
  };
  //
  sort(list);

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
