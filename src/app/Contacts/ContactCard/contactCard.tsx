import React from 'react';
import { Card, CardBody, CardHeader, Col, Container } from 'react-bootstrap';

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
    <Col>
      <Card>
        <CardHeader>{firstName + ' ' + middleName + ' ' + lastName}</CardHeader>
        <CardBody>
          <ul>
            <li>{'Home Phone:' + ' ' + homePhone}</li>
            <li>{'Cell Phone:' + ' ' + cellPhone}</li>
            <li>{'Work Phone:' + ' ' + workPhone}</li>
            <li>{'Email:' + ' ' + email}</li>
            <li>{'Address:' + ' ' + streetAddress}</li>
            <li>{'City:' + ' ' + city}</li>
            <li>{'State:' + ' ' + state}</li>
            <li>{'Zip code:' + ' ' + zip}</li>
            <li>Birthday</li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContactCard;
//import state and run a map to display all contact data
