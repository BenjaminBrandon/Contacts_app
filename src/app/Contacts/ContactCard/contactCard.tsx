import React from 'react';
import { Card, CardBody, CardHeader, Container } from 'react-bootstrap';

const ContactCard = ({ nextContact }: Contact) => {
  // const {firstName, lastName, } = {contact}
  // console.log('new contact:', nextContact);
  // console.log('new contact name:', nextContact.firstName);
  let {
    firstName,
    lastName,
    middleName,
    homePhone,
    cellPhone,
    workPhone,
    email,
    streetAddress,
    city,
    state,
    zip,
  } = nextContact;

  return (
    <Container>
      <Card>
        <CardHeader>{firstName + ' ' + lastName}</CardHeader>
        <CardBody>
          <ul>
            <li>{homePhone}</li>
            <li>{cellPhone}</li>
            <li>{workPhone}</li>
            <li>{email}</li>
            <li>{streetAddress}</li>
            <li>{city}</li>
            <li>{state}</li>
            <li>{zip}</li>
            <li>Birthday</li>
          </ul>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ContactCard;
//import state and run a map to display all contact data
