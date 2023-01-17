import "./Personality.scss";
import { InputGroup, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
import { PersonalityContext } from "context/PersonalityContext";

const Personalit = () => {
  const { perso, setPerso } = useContext(PersonalityContext);

  return (
    <div className="personality container">
      <h2 className="heading">
        <span>Tell us About Your Personality</span>
      </h2>
      <InputGroup>
        <InputGroup.Text className="perso">Resilient</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          onChange={(e) => setPerso({ resilient: e.target.value })}
          value={perso.resilient}
        />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text className="perso">Sociable</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          onChange={(e) => setPerso({ sociable: e.target.value })}
          value={perso.sociable}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text className="perso">Creative</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          onChange={(e) => setPerso({ creative: e.target.value })}
          value={perso.creative}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text className="perso">Adaptable</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          onChange={(e) => setPerso({ adaptable: e.target.value })}
          value={perso.adaptable}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text className="perso">Empathetic</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          onChange={(e) => setPerso({ empathetic: e.target.value })}
          value={perso.empathetic}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text className="perso">Ambitious</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          onChange={(e) => setPerso({ ambitious: e.target.value })}
          value={perso.ambitious}
        />
      </InputGroup>
      <Row className="buttons">
        <Col className="left">
          <NavLink to="/language">
            <Button variant="primary">Back</Button>
          </NavLink>
        </Col>
        <Col className="right">
          <NavLink to="/cv">
            <Button variant="danger">Next</Button>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default Personalit;
