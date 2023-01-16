import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { WorkHistoryContext } from "../../context/WorkHistoryContext";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

function WorkHistory() {
  const { dispatch } = useContext(WorkHistoryContext);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="heading">
              <span>Tell us about your most recent job</span>
            </h1>
            <p>We'll start there and work backward.</p>
          </Col>
        </Row>

        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} sm>
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ jobTitle: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} sm>
              <Form.Label>Employer</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ employer: e.target.value })}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} sm>
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ city: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} sm>
              <Form.Label>Country</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ country: e.target.value })}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} sm>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                min="1950-01-01"
                max="2023-01-18"
                onChange={(e) => dispatch({ startDate: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col} sm>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                min="2018-01-01"
                max="2023-01-18"
                onChange={(e) => dispatch({ endDate: e.target.value })}
              />
            </Form.Group>
          </Row>
          <Row className="buttons">
            <Col className="left">
              <NavLink to="/">
                <Button variant="primary">Back</Button>
              </NavLink>
            </Col>
            <Col className="right">
              <NavLink to="/education">
                <Button variant="danger">Next</Button>
              </NavLink>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default WorkHistory;
