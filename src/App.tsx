import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Level from "./pages/Level";
import Team from "./pages/Team";
import FAQ from "./pages/FAQ";

import {FAQ_ITEMS, TEAM_ITEMS} from "./utils/constants";
import "./App.scss";

const App = () => {
  return (
      <div className="main-container">
          <Header />
          <Home />
          <About />
          <Level />
          <Team team={TEAM_ITEMS} />
          <FAQ faqItems={FAQ_ITEMS} />
      </div>
  );
}

export default App;