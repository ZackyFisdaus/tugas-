import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home/home";
import Resto from "./containers/resto/resto";
import RestoKfc from "./containers/kfc/Restokfc";
import RestoMcd from "./containers/mcd/Restomcd";
import RestoBking from "./containers/bking/Restobking";
import Payment from "./containers/payment/payment";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resto" exact component={Resto} />
          <Route path="/resto/kfc" exact component={RestoKfc} />
          <Route path="/resto/mcd" exact component={RestoMcd} />
          <Route path="/resto/bking" exact component={RestoBking} />
          <Route path="/payment" exact component={Payment} />
        </Switch>
      </div>
    );
  }
}
export default App;
