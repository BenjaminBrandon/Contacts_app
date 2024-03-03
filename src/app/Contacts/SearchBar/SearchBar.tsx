import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { FloatingLabel, Form, Button, Container } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Container className={styles.SearchBarContainer}>
      <h1>SearchBar</h1>
    </Container>
  );
};
/*
<FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
*/
