import React from 'react';
import { Card, CardBody, CardHeader, Container } from 'react-bootstrap';

const ContactCard = (nextContact: Contact) => {
  // const {firstName, lastName, } = {contact}
  console.log('new contact:', nextContact);
  return (
    <Container>
      <Card>
        <CardHeader>{nextContact.firstName}</CardHeader>
        <CardBody>
          <ul>
            <li>Home Phone Number</li>
            <li>Cell Phone Number</li>
            <li>Work Phone Number</li>
            <li>Email</li>
            <li>Street Address</li>
            <li>City</li>
            <li>State</li>
            <li>Birthday</li>
          </ul>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ContactCard;
//import state and run a map to display all contact data
