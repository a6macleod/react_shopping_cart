import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import NoMatchPage from "./components/NoMatchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
