import { createContext } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const PrintPdfContext = createContext(null);

const PrintPdfContextProvider = ({ children }) => {
  const printPdfRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printPdfRef.current,
    documentTitle: "Resume",
    onAfterPrint: () => console.log("Print success"),
  });

  return (
    <PrintPdfContext.Provider value={{ printPdfRef, handlePrint }}>
      {children}
    </PrintPdfContext.Provider>
  );
};

export default PrintPdfContextProvider;
