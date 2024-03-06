import React from 'react';
import { Container, Form } from 'react-bootstrap';

export const AddContact = () => {
  return (
    <Container>
      <Form>
        <Form.Floating>
          <Form.Control type="submit" />
        </Form.Floating>
      </Form>
    </Container>
  );
};
