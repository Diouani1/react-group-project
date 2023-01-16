import { Form, Button, FloatingLabel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./Education.scss";
import { EduSkillContext } from "../EduSkillContext/EduSkillContext";

const Education = () => {
  const { edu, efo, education, setEducation, state, dispatch } =
    useContext(EduSkillContext);
  console.log(state);
  // function submitHandler(e) {
  //   e.preventDefault();
  //   setEducation(e.target.value);
  //   console.log(e.target.value);
  // }

  return (
    <div className="education">
      <h1>
        <span>Tell us about your education</span>
      </h1>
      <p>
        Include every school, even if you're still there or didn't graduate.
      </p>
      <Form className="container">
        <div className="firstsecondline">
          <Form.Group className="mb-3">
            <Form.Label>{efo.name}</Form.Label>
            <Form.Control
              className="input"
              type="input"
              placeholder="e.g.Leipzig-University"
              onChange={(e) => dispatch({ name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{efo.location}</Form.Label>

            <Form.Control
              className="input"
              type="input"
              placeholder="e.g.Leipzig,Germany"
              onChange={(e) => dispatch({ location: e.target.value })}
            />
          </Form.Group>
        </div>
        <div className="firstsecondline">
          <Form.Group className="mb-3">
            <Form.Label>{efo.degree}</Form.Label>
            <Form.Select
              className="input"
              aria-label="Default select example"
              onChange={(e) => dispatch({ degree: e.target.value })}
            >
              <option>Select a Degree</option>
              {edu.map((item, i) => (
                <option key={i} value={i}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{efo.enter}</Form.Label>
            <Form.Control
              className="input"
              type="input"
              placeholder="e.g. Bachelor's"
              onChange={(e) => dispatch({ enter: e.target.value })}
            />
          </Form.Group>
        </div>
        <div className="thirdline">
          <Form.Group className="mb-3">
            <Form.Label>{efo.field}</Form.Label>
            <Form.Control
              className="input"
              type="input"
              placeholder="e.g. Music"
              onChange={(e) => dispatch({ field: e.target.value })}
            />
          </Form.Group>
          <div className="thirdlinechild">
            <label>{efo.start}</label>
            <input
              className="input"
              type="date"
              onChange={(e) => dispatch({ start: e.target.value })}
            />
          </div>
          <div className="thirdlinechild">
            <label>{efo.end}</label>
            <input
              className="input"
              type="date"
              onChange={(e) => dispatch({ end: e.target.value })}
            />
          </div>
        </div>
        <Form.Group>
          <FloatingLabel controlId="floatingTextarea">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here "
              style={{ width: "700px", height: "200px", margin: "auto" }}
              onChange={(e) => dispatch({ textArea: e.target.value })}
            />
          </FloatingLabel>
        </Form.Group>
      </Form>
      <div className="buttons">
        <NavLink to="/workhistory">
          <Button className="buttonback" variant="outline-light" type="submit">
            Back
          </Button>
        </NavLink>
        <NavLink to="/skills">
          <Button className="buttonnext" variant="outline-danger" type="submit">
            Next
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Education;
