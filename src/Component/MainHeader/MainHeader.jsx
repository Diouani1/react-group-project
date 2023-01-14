import React, { useContext } from "react";
import {  Button, Navbar } from "react-bootstrap";
import { DataUeser } from "../../DataOfUser";
import { NavLink } from "react-router-dom";
const MainHeader = () => {
  const { setUser, user } = useContext(DataUeser);
  return (
    <div
      style={{
        borderBottom: "1px solid",
        margin: "0 0 1rem",
        padding: "0 2rem",
      }}
    >
      {/*  i use the navlink temporary, the navlink should in component */}
      <NavLink to="/"><Button>vijaya</Button></NavLink>
      <NavLink to="education"><Button>ten</Button></NavLink>
      <NavLink to="skills"><Button>ten</Button></NavLink>
      <NavLink to="cv"><Button>diouani</Button></NavLink>

      <Navbar>
        <Navbar.Brand>{user}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null);
              }}
            >
              Log Out
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MainHeader;
