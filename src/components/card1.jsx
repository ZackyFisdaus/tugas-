import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 50
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 200
  }
});

function Cards(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.gambar}
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
        <h1>{props.situs}</h1>
        <CardActions>
          <Button
            variant="outlined"
            href="/resto"
            color="primary"
            className={classes.button}
          >
            Kunjungi
          </Button>
        </CardActions>
      </Paper>
    </div>
  );
}
Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
