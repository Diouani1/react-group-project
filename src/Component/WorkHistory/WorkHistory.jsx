import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { WorkHistoryContext } from "../../context/WorkHistoryContext";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function WorkHistory() {
  const { state, dispatch } = useContext(WorkHistoryContext);
  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    navigate("/education");
  }
  return (
    <div style={{ padding: "5%" }}>
      <Container>
        <Row>
          <Col>
            <div className="heading">
              <span>Tell us about your most recent job</span>
            </div>
            <p>We'll start there and work backward.</p>
          </Col>
        </Row>

        <Form onSubmit={handelSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} sm={12} md={12} lg={6}>
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ jobTitle: e.target.value })}
                value={state.jobTitle}
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={12} md={12} lg={6}>
              <Form.Label>Employer</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ employer: e.target.value })}
                value={state.employer}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} sm={12} md={12} lg={6}>
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ city: e.target.value })}
                value={state.city}
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={12} md={12} lg={6}>
              <Form.Label>Country</Form.Label>
              <Form.Control
                onChange={(e) => dispatch({ country: e.target.value })}
                value={state.country}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} sm={12} md={12} lg={6}>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                min="1950-01-01"
                max="2023-01-18"
                onChange={(e) => dispatch({ startDate: e.target.value })}
                value={state.startDate}
                required
              />
            </Form.Group>

            <Form.Group as={Col} sm={12} md={12} lg={6}>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                min="2018-01-01"
                max="2023-01-18"
                onChange={(e) => dispatch({ endDate: e.target.value })}
                value={state.endDate}
                required
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
              <Button variant="danger" type="submit">
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default WorkHistory;
