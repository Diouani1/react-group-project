import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { PersonalDetailsContext } from "context/PersonalDetailsContext";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function PersonalDetails() {
  const { details, dispatch } = useContext(PersonalDetailsContext);
  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    navigate("workhistory");
  }
  return (
    <div>
      <Container>
        <Form onSubmit={handelSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} sm={12} md={12} lg={6}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ firstName: e.target.value })}
                type="text"
                placeholder="First Name"
                value={details.firstName}
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={12} md={12} lg={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ lastName: e.target.value })}
                type="text"
                placeholder="Last Name"
                value={details.lastName}
                required
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Profession</Form.Label>
            <Form.Control
              onChange={(e) => dispatch({ profession: e.target.value })}
              value={details.profession}
              required
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} sm={12} md={6} lg={4}>
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ city: e.target.value })}
                value={details.city}
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={12} md={6} lg={4}>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ postalCode: e.target.value })}
                value={details.postalCode}
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={12} lg={4}>
              <Form.Label>Country</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ country: e.target.value })}
                value={details.country}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} sm={12} md={12} lg={6}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ phone: e.target.value })}
                placeholder="e.g. +49-123-4567-89"
                value={details.phone}
                required
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={12} lg={6}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ email: e.target.value })}
                type="email"
                required
                placeholder="emial"
                value={details.email}
              />
            </Form.Group>
          </Row>
          <Row className="buttons">
            <Col className="right">
              {/* <NavLink to=> */}
              <Button variant="danger" type="submit">
                Next
              </Button>
              {/* </NavLink> */}
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default PersonalDetails;
