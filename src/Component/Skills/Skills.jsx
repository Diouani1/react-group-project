import "./Skills.scss";
import React from "react";
import {
  Container,
  Form,
  Button,
  ListGroup,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";
import { useContext } from "react";
import { EduSkillContext } from "../EduSkillContext/EduSkillContext";
import { NavLink } from "react-router-dom";

const Skills = () => {
  const {
    lis,
    liButton,
    buttons,
    valueIn,
    setValueIn,
    addSkills,
    setAddSkills,
  } = useContext(EduSkillContext);
  const addedList = (e) => {
    setAddSkills([...addSkills, valueIn]);
  };
  function addHandler(e) {
    const add = lis.filter((item) => item === e);
    setAddSkills([...addSkills, add]);
  }
  function deleteHandler(e) {
    const de = addSkills.filter((item) => item !== e);
    setAddSkills(de);
  }

  return (
    <Container>
      <Row>
        <Col sm={5}>
          <Container className="left">
            <h6>Add skill</h6>
            <Row>
              <Form className="d-flex">
                <Form.Control
                  type="input"
                  placeholder="Enter a skill"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    setValueIn(e.target.value);
                  }}
                />
                <Button onClick={addedList} variant="danger">
                  ADD
                </Button>
              </Form>
            </Row>
            <Row>
              <ListGroup
                as="ol"
                style={{
                  height: "60vh",
                  overflow: "auto",
                }}
              >
                {lis.map((item, i) => (
                  <ListGroup.Item
                    // as="li"
                    key={i}
                    className="lists"
                    style={{ width: "100%" }}
                  >
                    <li>{item}</li>
                    <Button
                      onClick={() => {
                        addHandler(item);
                      }}
                      variant="outline-info"
                    >
                      {buttons}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Row>
          </Container>
        </Col>
        <Col sm={7}>
          <Container className="right">
            <h1>
              <span>Highlight your skills</span>
            </h1>
            <div className="mainskills">
              <ListGroup
                style={{
                  height: "60vh",
                  overflow: "auto",
                }}
              >
                {addSkills.map((item, i) => (
                  <ListGroup.Item key={i}>
                    <li>{item}</li>
                    <Button
                      onClick={() => deleteHandler(item)}
                      variant="outline-info"
                    >
                      {liButton.deleted}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>

            <div className="addingarea"></div>
          </Container>
        </Col>
      </Row>
      <ButtonGroup className="buttons">
        <NavLink to="/education">
          <Button className="backbutton" variant="outline-dark" type="submit">
            Back
          </Button>
        </NavLink>
        <NavLink to="/language">
          <Button className="nextbutton" variant="outline-danger" type="submit">
            Next
          </Button>
        </NavLink>
      </ButtonGroup>
    </Container>
  );
};

export default Skills;
