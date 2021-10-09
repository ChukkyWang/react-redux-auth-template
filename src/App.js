import React, { createContext, useState } from "react";
import MainApp from "./Main";

export const AppContext = createContext();

function App() {
  const [tokenValue, setTokenValue] = useState("");


  return (
    <div className="App">
      <AppContext.Provider value={[tokenValue, setTokenValue]}>
        <MainApp />
      </AppContext.Provider>
    </div>
  );
}

export default App;
