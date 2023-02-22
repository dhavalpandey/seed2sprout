import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Instructions from "./Components/Instructions/Instructions";

//Seed instructions
import Carrots from "./Components/Instructions/Details/Carrots";
import Tomato from "./Components/Instructions/Details/Tomato";
import Lettuce from "./Components/Instructions/Details/Lettuce";
import Cucumber from "./Components/Instructions/Details/Cucumber";
import Beans from "./Components/Instructions/Details/Beans";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/about">
            <Navbar />
            <About />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/seeds/carrot-seeds">
            <Navbar />
            <Carrots />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/seeds/tomato-seeds">
            <Navbar />
            <Tomato />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/seeds/lettuce-seeds">
            <Navbar />
            <Lettuce />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/seeds/cucumber-seeds">
            <Navbar />
            <Cucumber />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/seeds/runner-bean-seeds">
            <Navbar />
            <Beans />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/seeds">
            <Navbar />
            <Instructions />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/contact">
            <Navbar />
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
