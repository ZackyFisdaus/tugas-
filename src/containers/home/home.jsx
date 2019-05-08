import React, { Component } from "react";
import Nav from "../../components/header";
import Card from "../../components/card1";
import Grid from "@material-ui/core/Grid";

export default class home extends Component {
  render() {
    return (
      <div>
        <Nav name="Home" />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Card
              situs="Go Food"
              gambar="https://lelogama.go-jek.com/cache/70/69/70699f2a6e31ffae33bfa26856e906e8.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              situs="Go Car"
              gambar="https://lelogama.go-jek.com/cache/16/e6/16e6fd41f723d98c639f74ad25a782fd.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              situs="Go Send"
              gambar="https://lelogama.go-jek.com/cache/e9/07/e907fa626d17423d7ecc6044c49f0af1.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              situs="Go Ride"
              gambar="https://lelogama.go-jek.com/cache/3f/86/3f869472f1ed3b420cfaa0cda9701c26.jpg"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
