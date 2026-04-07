import React, { useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main";
import { loadPortfolioData } from "./portfolio";

function App() {
    useEffect(() => {
    loadPortfolioData();
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
