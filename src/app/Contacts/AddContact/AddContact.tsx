import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import styles from './AddContact.module.scss';

export const AddContact = () => {
  const [newContact, setNewContact] = useState<Contact>({
    firstName: '',
    lastName: '',
    middleName: '',
    homePhone: 0,
    cellPhone: 0,
    workPhone: 0,
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: 0,
  });

  // const changeHandler = e => {
  //   const { name, value } = e.target;
  //   setNewContact(prev => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  //need to add email field into form

  return (
    <Container className={styles.addContactCard}>
      <Form>
        <Row className="g-3 p-2 md-3">
          <Col>
            <FloatingLabel
              controlId="floatingSearch"
              label="First name"
            >
              <Form.Control
                type="text"
                name="firstName"
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
        <Row className="g-3 p-2 md-3">
          <Col>
            <FloatingLabel
              controlId="floatingSearch"
              label="Home phone"
            >
              <Form.Control
                type="text"
                placeholder="Home phone"
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingSearch"
              label="Cell phone"
            >
              <Form.Control
                type="text"
                placeholder="Cell phone"
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingSearch"
              label="Work phone"
            >
              <Form.Control
                type="text"
                placeholder="Work phone"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-3 p-2 md-3">
          <Col>
            <FloatingLabel
              controlId="floatingSearch"
              label="Street address"
            >
              <Form.Control
                type="text"
                placeholder="Street address"
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingSearch"
              label="City"
            >
              <Form.Control
                type="text"
                placeholder="City"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-3 p-2 md-3">
          <Col>
            <FloatingLabel
              controlId="floatingSearch"
              label="State"
            >
              <Form.Select>
                <option value="">N/A</option>
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AR">Arkansas</option>
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DC">District of Columbia</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="IA">Iowa</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="MA">Massachusetts</option>
                <option value="MD">Maryland</option>
                <option value="ME">Maine</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MO">Missouri</option>
                <option value="MS">Mississippi</option>
                <option value="MT">Montana</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="NE">Nebraska</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NV">Nevada</option>
                <option value="NY">New York</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VA">Virginia</option>
                <option value="VT">Vermont</option>
                <option value="WA">Washington</option>
                <option value="WI">Wisconsin</option>
                <option value="WV">West Virginia</option>
                <option value="WY">Wyoming</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingSearch"
              label="Zip code"
            >
              <Form.Control
                type="text"
                placeholder="Zip code"
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <FloatingLabel
              controlId="floatingSearch"
              label="Birthday"
            >
              <Form.Control
                type="date"
                placeholder="Birthday"
              />
            </FloatingLabel>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddContact;
