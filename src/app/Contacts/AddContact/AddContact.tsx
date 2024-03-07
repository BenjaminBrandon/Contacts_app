import React from 'react';
import { Container, FloatingLabel, Form, Row } from 'react-bootstrap';

export const AddContact = () => {
  return (
    <Container>
      <Form>
        <Row md="3">
          <FloatingLabel
            controlId="floatingSearch"
            label="First name"
          >
            <Form.Control
              type="text"
              placeholder="First name"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSearch"
            label="Last name"
          >
            <Form.Control
              type="text"
              placeholder="Last name"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingSearch"
            label="Middle name"
          >
            <Form.Control
              type="text"
              placeholder="Middle name"
            />
          </FloatingLabel>
        </Row>
      </Form>
    </Container>
  );
};

export default AddContact;
