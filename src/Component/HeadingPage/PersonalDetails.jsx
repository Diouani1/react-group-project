import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { PersonalDetailsContext } from "../../context/PersonalDetailsContext";

function PersonalDetails() {
  const { dispatch } = useContext(PersonalDetailsContext);
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={(e) => dispatch({ firstName: e.target.value })}
              type="text"
              placeholder="First Name"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={(e) => dispatch({ lastName: e.target.value })}
              type="text"
              placeholder="Last Name"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Profession</Form.Label>
          <Form.Control
            onChange={(e) => dispatch({ profession: e.target.value })}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={(e) => dispatch({ city: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              onChange={(e) => dispatch({ postalCode: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Country</Form.Label>
            <Form.Control
              onChange={(e) => dispatch({ country: e.target.value })}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={(e) => dispatch({ phone: e.target.value })}
              placeholder="e.g. +49-123-4567-89"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => dispatch({ email: e.target.value })}
              type="email"
              required
              placeholder="emial"
            />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default PersonalDetails;