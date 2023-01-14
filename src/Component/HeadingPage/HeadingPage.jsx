import React from "react";
import ImageFileChooser from "Component/HeadingPage/UploadPhoto/ImageFileChooser";
import ImageFilePreviewer from "Component/HeadingPage/UploadPhoto/ImageFilePreviewer";
import "Component/HeadingPage/HeadingPage.scss";
import PersonalDetails from "Component/HeadingPage/PersonalDetails";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function HeadingPage() {
  return (
    <>
      <div className="container">
        <div className="photo-preview">
          <ImageFilePreviewer />
          <ImageFileChooser />
        </div>
        <div className="personal-details">
          <PersonalDetails />
        </div>
      </div>
      <NavLink to="/workhistory">
        <Button variant="danger">Next</Button>
      </NavLink>
    </>
  );
}

export default HeadingPage;
