import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Explore from "./pages/explore";
import Home from "./pages/home";
import Location from "./pages/location";
import "./App.css"

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/location" component={Location} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
