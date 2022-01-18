import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} exact={route.exact} component={route.component} />;
        })}
      </Switch>
    </Router>
  );
}

export default App;
