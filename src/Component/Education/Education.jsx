import {
  Form,
  Button,
  FloatingLabel,
  Container,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./Education.scss";
import { EduSkillContext } from "../EduSkillContext/EduSkillContext";

const Education = () => {
  const { edu, efo, education, setEducation, grade, dispatch } =
    useContext(EduSkillContext);

  return (
    <div className="education">
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
              <Form.Label>{efo.name}</Form.Label>
              <Form.Control
                className="input"
                type="input"
                placeholder="e.g.Leipzig-University"
                onChange={(e) => dispatch({ name: e.target.value })}
                value={grade.name}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-4">
              <Form.Label>{efo.location}</Form.Label>
              <Form.Control
                className="input"
                type="input"
                placeholder="e.g.Leipzig,Germany"
                onChange={(e) => dispatch({ location: e.target.value })}
                value={grade.location}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="firstsecondline">
          <Col>
            <Form.Group className="mb-6">
              <Form.Label>{efo.degree}</Form.Label>

              <Form.Select
                className="input"
                aria-label="Default select example"
                onChange={(e) => dispatch({ degree: e.target.value })}
                value={grade.degree}
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
              <Form.Label>{efo.enter}</Form.Label>
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
        <Row style={{ marginTop: "1rem" }}>
          <Col className="mb-3">
            <Form.Group>
              <Form.Label>{efo.field}</Form.Label>
              <Form.Control
                className="input"
                type="input"
                placeholder="e.g. Music"
                onChange={(e) => dispatch({ field: e.target.value })}
                value={grade.field}
              />
            </Form.Group>
          </Col>
          <Col
            className="d-flex"
            style={{
              flexDirection: "column",
            }}
          >
            <Form.Label>{efo.start}</Form.Label>
            <Form.Control
              className="input"
              type="date"
              onChange={(e) => dispatch({ start: e.target.value })}
              value={grade.start}
            />
          </Col>
          <Col
            className="d-flex"
            style={{
              flexDirection: "column",
            }}
          >
            <Form.Label>{efo.end}</Form.Label>
            <Form.Control
              className="input"
              type="date"
              onChange={(e) => dispatch({ end: e.target.value })}
              value={grade.end}
            />
          </Col>
        </Row>
        <Form.Group className="d-flex" style={{ justifyContent: "center" }}>
          <FloatingLabel controlId="floatingTextarea">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here "
              style={{ width: "68vw", height: "30vh" }}
              onChange={(e) => dispatch({ textArea: e.target.value })}
              value={grade.textArea}
            />
          </FloatingLabel>
        </Form.Group>

        <ButtonGroup
          className="d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <NavLink to="/workhistory">
            <Button variant="primary">Back</Button>
          </NavLink>
          <NavLink to="/skills">
            <Button variant="danger">Next</Button>
          </NavLink>
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default Education;
