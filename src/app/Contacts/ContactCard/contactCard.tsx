import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  ListGroup,
} from 'react-bootstrap';
import styles from './ContactCard.module.scss';

const ContactCard = ({ nextContact }: Contact) => {
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
      <Card className={styles.contactCard}>
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
