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
            <ListGroup.Item>{'Home Phone:' + ' ' + homePhone}</ListGroup.Item>
            <ListGroup.Item>{'Cell Phone:' + ' ' + cellPhone}</ListGroup.Item>
            <ListGroup.Item>{'Work Phone:' + ' ' + workPhone}</ListGroup.Item>
            <ListGroup.Item>{'Email:' + ' ' + email}</ListGroup.Item>
            <ListGroup.Item>{'Address:' + ' ' + streetAddress}</ListGroup.Item>
            <ListGroup.Item>{'City:' + ' ' + city}</ListGroup.Item>
            <ListGroup.Item>{'State:' + ' ' + state}</ListGroup.Item>
            <ListGroup.Item>{'Zip code:' + ' ' + zip}</ListGroup.Item>
            <ListGroup.Item>Birthday</ListGroup.Item>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContactCard;
//////
