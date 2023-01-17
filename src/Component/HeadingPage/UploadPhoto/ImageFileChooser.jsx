import React, { useContext } from "react";
import { ImageFileContext } from "context/ImageFileContext";
import "./ImageFileChooser.scss";

function ImageFileChooser() {
  const { imageFile, setImageFile } = useContext(ImageFileContext);

  const fileSelected = (e) => {
    const file = e.target.files[0];

    if (file.size > 4194304) {
      // 4*1024*1024
      setImageFile(null);
      console.log("file size should be less than 4Mb");
      return;
    }

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setImageFile(null);
      console.log("Selected file is not an image");
      return;
    }
    setImageFile(file);
  };

  const label = imageFile ? "Change Photo" : "Upload Photo";

  return (
    <div className="button">
      <label className="btn btn-primary btn-file">
        {label}
        <input
          onChange={fileSelected}
          type="file"
          style={{ display: "none" }}
          accept="image/png, image/jpeg"
        />
      </label>
    </div>
  );
}

export default ImageFileChooser;
