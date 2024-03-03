import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { FloatingLabel, Form, Button, Container } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Container className={styles.SearchBarContainer}>
      <FloatingLabel
        controlId="floatingSearch"
        label="Search"
      >
        <Form.Control
          type="search"
          placeholder="Name"
        />
      </FloatingLabel>
      <Button className={styles.SearchButton}>Submit</Button>
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
