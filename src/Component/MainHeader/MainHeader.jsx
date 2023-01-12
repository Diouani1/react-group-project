import React, { useContext } from 'react'
import {Navbar, Container, Button, } from "react-bootstrap"
import { DataUeser } from '../../DataOfUser';
const MainHeader = () => {
    const {setUser, user}=useContext(DataUeser)
    return (
        <div style={{borderBottom: "1px solid", margin:"0 0 1rem"}}>
            <Navbar>
              <Container>
                <Navbar.Brand >{user}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                   <Button onClick={()=> {localStorage.removeItem("user");setUser(null)} } >Log Out</Button>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
      );
}

export default MainHeader