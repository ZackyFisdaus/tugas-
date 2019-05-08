import React, { Component } from "react";
import Nav from "../../components/nav";
import Cardresto from "../../components/cardresto";

class Resto extends Component {
  render() {
    return (
      <div>
        <Nav judul="Restaurant" />
        <Cardresto />
      </div>
    );
  }
}
export default Resto;
