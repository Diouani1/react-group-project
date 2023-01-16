import { useContext } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { LanguageData } from "../../context/LanguageContext";

const Language = () => {
  const { setlanguage } = useContext(LanguageData);

  return (
    <div>
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

      <div
        style={{
          width: "70%",
          margin: "auto",
          display: "Flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="primary">Back</Button>
        <Button variant="danger">Next</Button>
      </div>
    </div>
  );
};

export default Language;
