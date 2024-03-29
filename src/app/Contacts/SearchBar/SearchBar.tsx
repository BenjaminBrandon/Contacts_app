import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import {
  FloatingLabel,
  Form,
  Button,
  Container,
  Navbar,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'react-bootstrap';
import AddContact from '../AddContact/AddContact';

const SearchBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      className={styles.SearchBarContainer}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">Contacts</Navbar.Brand>
        <Button onClick={handleShow}>Add Contact</Button>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
      >
        <ModalHeader
          className={styles.modalHeader}
          closeButton
        >
          <h3>New Contact</h3>
        </ModalHeader>
        <ModalBody className={styles.modalBody}>
          <AddContact />
        </ModalBody>
        <ModalFooter className={styles.modalFooter}>
          <Button
            className={styles.SearchButton}
            onClick={handleClose}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
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
  _put into a navbar...
*/
