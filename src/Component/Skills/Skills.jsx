import "./Skills.scss";
import React from "react";
import {
  Container,
  Form,
  Button,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap";
import { useContext } from "react";
import { EduSkillContext } from "../EduSkillContext/EduSkillContext";
import { NavLink } from "react-router-dom";

const Skills = () => {
  const { lis, liButton, buttons, setButtons } = useContext(EduSkillContext);
  const addedList = () => {};
  function addHandler(props) {
    console.log(props);
    setButtons(liButton.checked);
    buttons(liButton.add);
  }

  return (
    <div className="skills">
      <Container className="left">
        <h6>Add skill</h6>
        <Form className="d-flex">
          <Form.Control
            type="input"
            placeholder="Enter a skill"
            className="me-2"
            aria-label="Search"
          />
          <Button onClick={() => {}} variant="danger">
            ADD
          </Button>
        </Form>

        <ListGroup as="ol" numbered>
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
      </Container>
      <Container className="right">
        <h1>
          <span>Highlight your skills</span>
        </h1>
        <div className="mainskills">
          <ListGroup.Item className="skillitem">
            <li>Singing</li>

            <Button variant="outline-info">{liButton.deleted}</Button>
          </ListGroup.Item>
        </div>

        <div className="addingarea"></div>

        <ButtonGroup className="buttons">
          <NavLink to="/education">
            <Button className="backbutton" variant="outline-dark" type="submit">
              Back
            </Button>
          </NavLink>
          <NavLink to="/language">
            <Button
              className="nextbutton"
              variant="outline-danger"
              type="submit"
            >
              Next
            </Button>
          </NavLink>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default Skills;
