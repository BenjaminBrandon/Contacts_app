import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';
import styles from './AddContact.module.scss';

export const AddContact = () => {
  return (
    <Card className={styles.addContactCard}>
      <CardBody>
        <Form>
          <Row md="3">
            <Col>
              <FloatingLabel
                controlId="floatingSearch"
                label="First name"
              >
                <Form.Control
                  type="text"
                  placeholder="First name"
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingSearch"
                label="Last name"
              >
                <Form.Control
                  type="text"
                  placeholder="Last name"
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingSearch"
                label="Middle name"
              >
                <Form.Control
                  type="text"
                  placeholder="Middle name"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row md="3">
            <FloatingLabel
              controlId="floatingSearch"
              label="Home phone"
            >
              <Form.Control
                type="text"
                placeholder="Home phone"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingSearch"
              label="Cell phone"
            >
              <Form.Control
                type="text"
                placeholder="Cell phone"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingSearch"
              label="Work phone"
            >
              <Form.Control
                type="text"
                placeholder="Work phone"
              />
            </FloatingLabel>
          </Row>
          <Row md="2">
            <FloatingLabel
              controlId="floatingSearch"
              label="Street address"
            >
              <Form.Control
                type="text"
                placeholder="Street address"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingSearch"
              label="City"
            >
              <Form.Control
                type="text"
                placeholder="City"
              />
            </FloatingLabel>
          </Row>
          <Row md="2">
            <FloatingLabel
              controlId="floatingSearch"
              label="State"
            >
              <Form.Control
                type="text"
                placeholder="State"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingSearch"
              label="Zip code"
            >
              <Form.Control
                type="text"
                placeholder="Zip code"
              />
            </FloatingLabel>
          </Row>
          <Row>
            <FloatingLabel
              controlId="floatingSearch"
              label="Birthday"
            >
              <Form.Control
                type="date"
                placeholder="Birthday"
              />
            </FloatingLabel>
          </Row>
          <Button>Submit</Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default AddContact;
