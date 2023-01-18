import {
  Form,
  Button,
  FloatingLabel,
  Container,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./Education.scss";
import { EduSkillContext } from "../EduSkillContext/EduSkillContext";

const Education = () => {
  const { edu, efo, education, setEducation, grade, dispatch } =
    useContext(EduSkillContext);

  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    navigate("/skills");
  }

  return (
    <div className="education" onSubmit={handelSubmit}>
      <h1>
        <span>Tell us about your education</span>
      </h1>
      <p>
        Include every school, even if you're still there or didn't graduate.
      </p>
      <Form className="container">
        <Row className="firstsecondline">
          <Col>
            <Form.Group className="mb-4">
              <Form.Label>School Name</Form.Label>
              <Form.Control
                className="input"
                type="input"
                placeholder="e.g.Leipzig-University"
                onChange={(e) => dispatch({ name: e.target.value })}
                value={grade.name}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-4">
              <Form.Label>School Location</Form.Label>
              <Form.Control
                className="input"
                type="input"
                placeholder="e.g.Leipzig,Germany"
                onChange={(e) => dispatch({ location: e.target.value })}
                value={grade.location}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="firstsecondline">
          <Col>
            <Form.Group className="mb-6">
              <Form.Label>Degree</Form.Label>

              <Form.Select
                className="input"
                aria-label="Default select example"
                onChange={(e) => dispatch({ degree: e.target.value })}
                value={grade.degree}
                required
              >
                <option>Select a Degree</option>
                {edu.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-6">
              <Form.Label>Enter a different degree </Form.Label>
              <Form.Control
                className="input"
                type="input"
                placeholder="e.g. Bachelor's"
                onChange={(e) => dispatch({ enter: e.target.value })}
                value={grade.enter}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="studydate" style={{ marginTop: "1rem" }}>
          <Col className="mb-3">
            <Form.Group>
              <Form.Label>Field of Study</Form.Label>
              <Form.Control
                className="input"
                type="input"
                placeholder="e.g. Music"
                onChange={(e) => dispatch({ field: e.target.value })}
                value={grade.field}
                required
              />
            </Form.Group>
          </Col>
          <Col
            className="d-flex"
            style={{
              flexDirection: "column",
            }}
          >
            <Form.Label>Graduation Start Date</Form.Label>

            <Form.Control
              className="input"
              type="date"
              onChange={(e) => dispatch({ start: e.target.value })}
              value={grade.start}
              required
            />
          </Col>
          <Col
            className="d-flex"
            style={{
              flexDirection: "column",
            }}
          >
            <Form.Label>Graduation End Date</Form.Label>
            <Form.Control
              className="input"
              type="date"
              onChange={(e) => dispatch({ end: e.target.value })}
              value={grade.end}
              required
            />
          </Col>
        </Row>
        <Form.Group className="d-flex" style={{ justifyContent: "center" }}>
          <FloatingLabel controlId="floatingTextarea">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here "
              style={{ width: "50vw", height: "20vh" }}
              onChange={(e) => dispatch({ textArea: e.target.value })}
              value={grade.textArea}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button variant="primary" onClick={() => navigate("/workhistory")}>
            Back
          </Button>

          <Button variant="danger" type="submit">
            Next
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Education;
