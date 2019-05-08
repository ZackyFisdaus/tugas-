import React, { Component } from "react";
import Header from "../../components/header";
import Card from "../../components/card2";
import Grid from "@material-ui/core/Grid";

export default class home extends Component {
  render() {
    return (
      <div>
        <Header name="Home" />
        <Grid container spacing={16}>
          <Grid item xs={12} sm={4}>
            <Card
              price="19000"
              name="Hamburger"
              image="https://www.bk.com/sites/default/files/03156-2-Hamburger-700x360_CR.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="5000"
              name="Chikken Nuggets"
              image="https://www.bk.com/sites/default/files/03156-2-10pcChickenNuggets-700x360_CR.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="9000"
              name="Sundae Pie"
              image="https://www.bk.com/sites/default/files/03156-2-HersheySundaePie-700x360_CR.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="15000"
              name="Burrito"
              image="https://www.bk.com/sites/default/files/03156-2-EggnormousBurrito-700x360_CR.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="15000"
              name="Cini Minis"
              image="https://www.bk.com/sites/default/files/02570-7%20Web%20Silos_Cini%20Minis_700x360_CR.png"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="30000"
              name="Oreo Cheese Cake"
              image="https://www.bk.com/sites/default/files/03156-2-OreoCheesecake-700x360_CR.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="4700"
              name="Iced Tea"
              image="https://www.bk.com/sites/default/files/03156-2-IcedTea-700x360_CR.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="4500"
              name="Nestle Water"
              image="https://www.bk.com/sites/default/files/03156-2-NestleWater-700x360_CR.png"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="14000"
              name="Coffe"
              image="https://www.bk.com/sites/default/files/19_BKCafe_SM_ZeroDeg_Silo_V1_700x360%5B6%5D%5B4%5D.png"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
