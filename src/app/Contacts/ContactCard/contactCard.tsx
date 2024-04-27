import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  ListGroup,
} from 'react-bootstrap';

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
          <ListGroup>
            <ListGroup.Item>{'Home Phone:' + ' ' + homePhone}</li>
            <ListGroup.Item>{'Cell Phone:' + ' ' + cellPhone}</li>
            <ListGroup.Item>{'Work Phone:' + ' ' + workPhone}</li>
            <ListGroup.Item>{'Email:' + ' ' + email}</li>
            <ListGroup.Item>{'Address:' + ' ' + streetAddress}</li>
            <ListGroup.Item>{'City:' + ' ' + city}</li>
            <ListGroup.Item>{'State:' + ' ' + state}</li>
            <ListGroup.Item>{'Zip code:' + ' ' + zip}</li>
            <ListGroup.Item>Birthday</li>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContactCard;
//import state and run a map to display all contact data
