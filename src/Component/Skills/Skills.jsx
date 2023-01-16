
import "./Skills.scss"
import React from 'react'
import { Container,Form,Button,ListGroup, ButtonGroup} from "react-bootstrap"
import { useContext } from "react"
import  { EduSkillContext } from "../EduSkillContext/EduSkillContext"
import {NavLink} from "react-router-dom"




const Skills = () => {
  const { lis, liButton } = useContext(EduSkillContext);
  console.log(lis.length, liButton);

  return (
    <div className="skills">
      <Container className="left">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button
            variant="outline-success"
            style={{
              height: "2rem",
              backgroundColor: "blue",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Search
          </Button>
        </Form>

        <ListGroup as="ol" numbered>
          {lis.map((item, i) => (
            <ListGroup.Item
              // as="li"
              key={i}
              className="lists"
            >
              <li>{item}</li>
              <Button variant="outline-info">{liButton.add}</Button>
            </ListGroup.Item>
          ))}
          {/* <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      > <Button variant="outline-info">Info</Button>
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
        
        </div>
      </ListGroup.Item>  */}
        </ListGroup>
      </Container>
      <Container className="right">
        <h1>
          <span>Highlight your skills</span>
        </h1>

        <div className="addingarea"></div>

            
            <ButtonGroup className='buttons'>
       <NavLink to="/education">
           <Button className='backbutton' variant="outline-light" type="submit">
            Back
                 </Button>
       </NavLink>
      <NavLink to="/languages">
          <Button className='nextbutton'variant="outline-danger" type="submit">
            Next
          </Button>
      </NavLink>
       </ButtonGroup>
        

     

    </div>
  );
};

export default Skills;
