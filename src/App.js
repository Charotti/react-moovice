import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Weekly from "./Pages/Weekly";
import WeeklyBattle from "./Pages/WeeklyBattle";
import Popular from "./Pages/Popular";
import PopularBattle from "./Pages/PopularBattle";
import Favorites from "./Pages/Favorites";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link className="p-3" to="/">
            Home
          </Link>
          <Link className="p-3" to="/weekly">
            Weekly
          </Link>
          <Link className="p-3" to="/weekly-battle">
            Weekly Battle
          </Link>
          <Link className="p-3" to="/popular">
            Popular
          </Link>
          <Link className="p-3" to="/popular-battle">
            Popular Battle
          </Link>
          <Link className="p-3" to="/favorites">
            Favorites
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/weekly-battle" component={WeeklyBattle} />
          <Route path="/popular" component={Popular} />
          <Route path="/popular-battle" component={PopularBattle} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
