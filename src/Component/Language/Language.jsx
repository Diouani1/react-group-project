import { useContext } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { LanguageData } from "../../context/LanguageContext";
import {NavLink} from "react-router-dom"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Language = () => {
  const { setlanguage } = useContext(LanguageData);

  return (
    <div className="container">
      <Form
        style={{
          width: "60%",
          margin: "100px Auto",
        }}
      >
        <Form.Group>
          <Form.Label>First Language</Form.Label>

          <FormControl
            type="text"
            placeholder="Normal text"
            onChange={(e) => setlanguage({ firstLanguage: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Level</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) =>
              setlanguage({ firstLanguageLevel: e.target.value })
            }
          >
            <option>Choose Your Language Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Complete">Complete</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Second Language</Form.Label>
          <FormControl
            type="text"
            placeholder="Normal text"
            onChange={(e) => setlanguage({ secondLanguage: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Level</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) =>
              setlanguage({ secondLanguageLevel: e.target.value })
            }
          >
            <option>Choose Your Language Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Complete">Complete</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Third Language</Form.Label>
          <FormControl
            type="text"
            placeholder="Normal text"
            onChange={(e) => setlanguage({ thirdLanguage: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Level</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) =>
              setlanguage({ thirdLanguageLevel: e.target.value })
            }
          >
            <option>Choose Your Language Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Complete">Complete</option>
          </Form.Select>
        </Form.Group>
      </Form>

      
       <Row className="buttons">
            <Col className="left">
              <NavLink to="/skills">
                <Button variant="primary">Back</Button>
              </NavLink>
            </Col>
            <Col className="right">
              <NavLink to="/personality">
                <Button variant="danger">Next</Button>
              </NavLink>
            </Col>
          </Row>
     
    </div>
  );
};

export default Language;
