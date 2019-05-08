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
              price="17000"
              name="Hamburger"
              image="http://www.kfcku.com/assets/gallery/thumb/1361800208_162x144-resize.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="5000"
              name="Rice"
              image="http://www.kfcku.com/assets/gallery/thumb/1361800783_162x144-resize.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="5000"
              name="Donuts"
              image="http://www.kfcku.com/assets/gallery/thumb/1361801790_162x144-resize.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="16500"
              name="Coffe"
              image="http://www.kfcku.com/assets/gallery/thumb/1361801273_162x144-resize.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="5000"
              name="Riser"
              image="http://www.kfcku.com/assets/gallery/thumb/1361806405_162x144-resize.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price=""
              name="Pancake"
              image="http://www.kfcku.com/assets/gallery/thumb/1361806386_162x144-resize.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="20000"
              name="Waffle"
              image="http://www.kfcku.com/assets/gallery/thumb/1361806477_162x144-resize.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="25000"
              name="Scrambled Egg"
              image="http://www.kfcku.com/assets/gallery/thumb/1361806420_162x144-resize.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="6500"
              name="Aqua"
              image="http://www.kfcku.com/assets/gallery/thumb/1361801018_162x144-resize.jpg"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
