import { createContext, useState } from "react";

export const ImageFileContext = createContext(null);

const ImageFileContextProvider = ({ children }) => {
  const [imageFile, setImageFile] = useState(null);

  return (
    <ImageFileContext.Provider value={{ imageFile, setImageFile }}>
      {children}
    </ImageFileContext.Provider>
  );
};

export default ImageFileContextProvider;
