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
    <div className="skills">
      <Container style={{ padding: "5% 0 1rem" }}>
        <Row>
          <Col sm={5}>
            <Container className="d-flex-column">
              <Row
                style={{
                  marginBottom: "1rem",
                }}
              >
                <Form className="d-flex">
                  {/* <h6>Add skill</h6> */}
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
                    height: "40vh",
                    overflow: "auto",
                  }}
                >
                  {lis.map((item, i) => (
                    <ListGroup.Item
                      // as="li"
                      key={i}
                      className="lists"
                      style={{
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
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
                    height: "40vh",
                    overflow: "auto",
                  }}
                >
                  {addSkills.map((item, i) => (
                    <ListGroup.Item
                      key={i}
                      style={{
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
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
        <ButtonGroup
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <NavLink to="/education">
            <Button variant="primary">Back</Button>
          </NavLink>
          <NavLink to="/language">
            <Button variant="danger">Next</Button>
          </NavLink>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Skills;
