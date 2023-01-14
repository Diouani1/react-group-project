import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { WorkHistoryContext } from "context/WorkHistoryContext";

function WorkHistory() {
  const { dispatch } = useContext(WorkHistoryContext);
  return (
    <div>
      <Container>
        <div>
          <h2>Tell us about your most recent job</h2>
          <h3>We'll start there and work backward.</h3>
        </div>

        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ jobTitle: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Employer</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ employer: e.target.value })}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ city: e.target.value })}
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
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                min="1950-01-01"
                max="2023-01-18"
                onChange={(e) => dispatch({ stateDate: e.target.value })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                min="2018-01-01"
                max="2023-01-18"
                onChange={(e) => dispatch({ endDate: e.target.value })}
              />
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default WorkHistory;
