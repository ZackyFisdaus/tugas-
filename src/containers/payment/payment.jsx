import React, { Component } from "react";

export default class Payment extends Component {
  componentDidMount() {
    var x = sessionStorage.total;
    document.getElementById("totalHarga").innerHTML = x;
  }
  render() {
    return (
      <div>
        <h1 className="display-3">Checkout Pembayaran</h1>
        <p className="lead">Total Yang Harus Dibayar :</p>
        <p id="totalHarga" />
      </div>
    );
  }
}
