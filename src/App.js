import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Clicky from "./pages/Clicky";

const App = () => (
  <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={Clicky} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
