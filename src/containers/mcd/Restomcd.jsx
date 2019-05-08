import React, { Component } from "react";
import Header from "../../components/header";
import Card from "../../components/card2";
import Grid from "@material-ui/core/Grid";

export default class home extends Component {
  render() {
    return (
      <div>
        <Header name="Home" />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <Card
              price="8000"
              name="Salad"
              image="https://www.mcdonalds.com/is/image/content/dam/usa/nutrition/items/regular/desktop/t-mcdonalds-Side-Salad.jpg?$THUMBNAIL_MEDIUM$"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="12000"
              name="Apple Pie"
              image="https://www.mcdonalds.com/is/image/content/dam/usa/nutrition/items/regular/desktop/t-mcdonalds-Baked-Hot-Apple-Pie.jpg?$THUMBNAIL_MEDIUM$"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="9900"
              name="Pancake"
              image="https://www.mcdonalds.com/is/image/content/dam/usa/nutrition/items/regular/desktop/t-mcdonalds-Hotcakes.jpg?$THUMBNAIL_MEDIUM$"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="15000"
              name="Burrito"
              image="https://www.mcdonalds.com/is/image/content/dam/usa/nutrition/items/regular/desktop/t-mcdonalds-Sausage-Burrito.jpg?$THUMBNAIL_MEDIUM$"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="7500"
              name="Hash Browns"
              image="https://www.mcdonalds.com/is/image/content/dam/usa/nutrition/items/regular/desktop/t-mcdonalds-HASH-BROWNS.jpg?$THUMBNAIL_MEDIUM$"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="10000"
              name="Hamburger"
              image="https://www.mcdonalds.com/is/image/content/dam/usa/nutrition/items/regular/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg?$THUMBNAIL_MEDIUM$"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="3500"
              name="Sweet Tea"
              image="https://www.mcdonalds.com/is/image/content/dam/usa/nutrition/items/regular/desktop/t-mcdonalds-Iced-Tea-Large.jpg?$THUMBNAIL_MEDIUM$"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="5000"
              name="Vanilla Cone"
              image="https://www.mcdonalds.com/is/image/content/dam/usa/nutrition/items/regular/desktop/t-mcdonalds-Vanilla-Reduced-Fat-Ice-Cream-Cone.jpg?$THUMBNAIL_MEDIUM$"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              price="21000"
              name="Milk Shake"
              image="https://www.mcdonalds.com/is/image/content/dam/usa/nutrition/items/regular/desktop/t-mcdonalds-Vanilla-McCafe-Shake-Medium.jpg?$THUMBNAIL_MEDIUM$"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
