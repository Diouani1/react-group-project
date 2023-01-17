import React, { useContext } from "react";
import { ImageFileContext } from "context/ImageFileContext"; 
import "./ImageFilePreviewer.scss";
import photo from "assets/photo.svg";

function ImageFilePreviewer() {
  const { imageFile } = useContext(ImageFileContext);
  const img = imageFile ? (
    <img className="photo" src={URL.createObjectURL(imageFile)} alt="" />
  ) : (
    <img className="photo icon" src={photo} alt="" />
  );

  return <div className="preview">{img}</div>;
}

export default ImageFilePreviewer;
