import "./styles/App.css";
import { Nav, Navbar } from "react-bootstrap";
import { HashRouter, Route } from "react-router-dom";
import Home from "./home";
import Team from "./team";
import Events from "./event";
import About from "./about";
import Contact from "./contact";
import Addevent from "./addevent";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Codeflow</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar>

        <Route path="/" exact={true} component={Home} />
        <Route path="/team" exact={true} component={Team} />
        <Route path="/events" exact={true} component={Events} />

        <Route path="/about" exact={true} component={About} />
        <Route path="/contact" exact={true} component={Contact} />

        <Route path="/Add" exact={true} component={Addevent} />
      </div>
    </HashRouter>
  );
}

export default App;
