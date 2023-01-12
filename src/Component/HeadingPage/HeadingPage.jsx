import React from "react";
import ImageFileChooser from "./UploadPhoto/ImageFileChooser";
import ImageFilePreviewer from "./UploadPhoto/ImageFilePreviewer";
import "./HeadingPage.scss";
import PersonalDetails from "./PersonalDetails";

function HeadingPage() {
  return (
    <div className="container">
      <div className="photoPreview">
        <ImageFilePreviewer />
        <ImageFileChooser />
      </div>
      <div>
        <PersonalDetails />
      </div>
    </div>
  );
}

export default HeadingPage;
