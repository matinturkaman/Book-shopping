import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CartProvider from "./providers/cartProvider";
import { routes } from "./routes/routes";

function App(): JSX.Element {
  return (
    <Router>
      <CartProvider>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
