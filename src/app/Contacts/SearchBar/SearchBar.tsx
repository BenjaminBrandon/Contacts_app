import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import {
  FloatingLabel,
  Form,
  Button,
  Container,
  Navbar,
} from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Navbar
      className={styles.SearchBarContainer}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">Contacts</Navbar.Brand>
      </Container>
      <Container className={styles.SearchField}>
        <Button className={styles.SearchButton}>Submit</Button>
        <FloatingLabel
          controlId="floatingSearch"
          label="Search"
        >
          <Form.Control
            type="search"
            placeholder="Name"
          />
        </FloatingLabel>
      </Container>
    </Navbar>
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
  _put into a navbar.
*/
