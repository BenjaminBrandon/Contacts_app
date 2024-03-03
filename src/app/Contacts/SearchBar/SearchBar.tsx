import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { FloatingLabel, Form, Button, Container } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Container className={styles.SearchBarContainer}>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
      >
        <Form.Control
          type="password"
          placeholder="Password"
        />
      </FloatingLabel>
    </Container>
  );
};

export default SearchBar;
/*
~~~~notes~~~~
  _add state
  _add search function
  _search updates state on change
  _make search realtime responsive returning all results for current search in type field
  _add styles
  _put into a navbar
*/
