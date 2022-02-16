import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Weekly from "./Pages/Weekly";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/weekly/:id" component={Weekly} />
            <Route path="/weekly-battle/:id" component={WeeklyBattle} />
            <Route path="/popular/:id" component={Popular} />
            <Route path="/popular-battle/:id" component={PopularBattle} />
            <Route path="/favorites/:id" component={Favorites} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
