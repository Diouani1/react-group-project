
import { Form,Button,FloatingLabel} from 'react-bootstrap'
import { useContext } from 'react'
import "./Education.scss"
import { EduSkillContext } from '../EduSkillContext/EduSkillContext'

const Education = () => {
    const{edu,efo}=useContext(EduSkillContext)
  return (
    <div className='education'>
        <h1><span>Tell us about your education</span></h1>
        <p>Include every school, even if you're still there or didn't graduate.</p>
       <Form className='container'>
       <div className="firstsecondline">
           <Form.Group className="mb-3" >
            <Form.Label>{efo.name}</Form.Label>
            <Form.Control className='input' type="input" placeholder="e.g Leipzig-University" /> 
                 </Form.Group>
                 <Form.Group className="mb-3" >
            <Form.Label>{efo.location}</Form.Label>
            <Form.Control className='input' type="input" placeholder="e.g Leipzig,Germany"  /> 
                 </Form.Group>
       </div>
      <div className="firstsecondline">
          <Form.Group className="mb-3" >
          <Form.Label>{efo.degree}</Form.Label>
          <Form.Select className='input' aria-label="Default select example">
          <option>Select menu</option>
          {edu.map((item,i)=><option key={i} value={i}>{item}</option>)}
              </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>{efo.enter}</Form.Label>
            <Form.Control className='input' type="input" placeholder="e.g. Bachelor's" />
          </Form.Group>
      </div>
      <div className='thirdline'>
          <Form.Group className="mb-3" >
            <Form.Label>{efo.field}</Form.Label>
            <Form.Control className='input' type="input" placeholder="e.g. Music" />
                  </Form.Group>
          <div className='thirdlinechild'>
          <label >{efo.start}</label>
          <input className='input' type="date" />
          </div>
          <div className='thirdlinechild'>
              <label >{efo.end}</label>
              <input className='input' type="date" />
   
          </div>
                  </div>
          <Form.Group>

              <FloatingLabel controlId="floatingTextarea">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ width:"700px",height: "200px"}}
                />
              </FloatingLabel>
              </Form.Group>
          <Form.Group className="checkbox" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={efo.check} />
          </Form.Group>
    

    
       </Form>

       <div className='buttons'>
       <Button className='buttonback' variant="outline-light" type="submit">
        Back
      </Button>
      <Button className='buttonnext'variant="outline-danger" type="submit">
        Next
      </Button>
       </div>
    </div>
  )
}

export default Education