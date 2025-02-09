import { createContext, useContext, useState } from "react";

const ViewContext = createContext(undefined);

function ViewProvider({ children }) {
  const [sectionInView, setSectionInView] = useState("home");

  return (
    <ViewContext.Provider value={{ sectionInView, setSectionInView }}>
      {children}
    </ViewContext.Provider>
  );
}

function useView() {
  const context = useContext(ViewContext);

  if (context === undefined)
    throw new Error("ViewContext was used outside of ViewProvider");

  return context;
}

export { ViewProvider, useView };
