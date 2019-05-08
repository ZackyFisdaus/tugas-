import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Paper style={{ marginTop: 30 }} className={classes.paper}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography>
                    <img
                      src="data:image/png;base64,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"
                      width="350"
                      height="200"
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <CardActions>
              <Button
                variant="contained"
                href="/resto/kfc"
                className={classes.button}
              >
                Masuk
              </Button>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAByCAMAAABpyLN6AAAAtFBMVEXVKx79yC//////zjD+yi/UJR7RAADWLSH/0jD/0DDTHh3dUyLVKBr+zDDSGB3++vrQABziayTTFwDzz83UHQnaRyDwxcP4uC37wC778O/poJ3hYxPphSf55+bXOR/sjyjypivZRj3kjIzumSndZmP2sSz3397WOTfgYiPldiXeWiLnfibwoCrXOzHrqqjaVFHhenbvu7nkh4L/2THUJirZSkbfcG3cXlrSCxHmlZLhf4PWMAx2MAgSAAALIklEQVR4nO1caZuquBKGhkRFQEVc6FFcWj2ttuuMepz7///XrSRkAVlapZ/jh6kPLUJReVNbKoutvQF1jxPtVWhy7BJI2ttbMPN8+0/DEWT73iwguIKJ96exJMibBIBr9mqwANjsTeu+HiwA1tWO/p8GkUL+UZu8jstLsl8nPzxGyEVhqLnWd3hdKwxD61usz5Ibjub9fm/8WYzMQut5D1iXLvppVMgd1QwTyKn2W80C1oFT46zuz8KyOj1Dj8isjawcPSCtZ5ic1fjIY30eVr3v6JJqX9mNobCnshpz9HPArI5p6noMWJYpQVtOnHX+Y96POnocFrQ2yHAcV9qbs45/zMcSKqCtrVLVANFxw+qM8uPkUWp+CVhSbWYvjRXVJSxp+urnT5jSalV5S9W+WeWt1dK0gHr8sQMv1QTCsHzfRyHXktNbIa0lAtPs3DTmrjmU2ryuaWuuMmdcvsLcscFhhSDdCjkwJ8Wf+xEQ4wsBr7uqcWDLsoFZrQiWaTBjWCI4q0mFuYOI15gzG7tL/rJetiEtoYKWxZHWMqzjciv2uT81x1y5H+UmC4urwJkLwZZoLK4waxDhqi05r8x8tVtvfIKQ5nAPWQm5qBMFqJFQQhSMZk9CcEe8X6W6viJWgcCtY/bV+Lc+I7jVlgpBKGxVnsKkGap1RSpacZ9Tw8ydR2h1VYvWiBt9Xp6HuR88nuKDryssJnOr6IMzUgGgkI+XzmdZCpMptRbPP67wcOnNwuv1eqx9GZLzsoZJl9vANOM2AN1EbY0E3mb/VoeU95MPENV6SQpzed15k33QPBl6qBPZ67YC4hnQ+SonJK0lt4yTjCVhSJHzZaJLakXEtO6UNHzz4kBNSIxQyFMY144lQiEpBXV495L57jES+Ug3Rjfy+PBkzlEcaNqAM+f964cl4HJ5IOm1W4e1vniyYoYUNq+1bpxIhE883z1IMqemlaYWrxQiHKIT1TRJXPFO7/lUobhrimlQR1RhtKlQZIkUjTRF/W08nyp4Psooz92oLbNPQKOVqGfSeD+4IZV89yChuphvVdOiqDnnOZc4mCigUwtT1BK1d/9ZXJbsY+qAKzKYs7YUlDfZi+IS41kJUyPpE4M0UeiT51GSxZGYm6Q225TTpK/nUphMXrqZWjiJcDX7TTC6CN3UgJMxFC/Z7idXzGVNPYOF66CKIGvkl/FoJaa71dv8dg+FIhqzyhOZsT6RCLhaeuJEirjxMylMzHmyV0gEFmfg8jrxdoDnwPhQBOp/ZixSliSy6nIx8sCMgk/QzH7GrEcUvsDeesLBRHxlOyqqV7mvax15mU5KGD0TkbLGFAXDLYViLh1yq5uZc4tQhrf5OC4xicmdKHNfrnbEbC57GVE4/jPltBwb0+oWTtyXay3ujUbWKqKoi/TkfOkeQlLrejUzD4qmnA+JMKsT1kDxjAdhaZZYxspbiBFJ3JyLFJtpIsVj0xbOvolrLJWevZpsrZMrvLqRmZtQKHFVH61aZXbOK5iQjH2uiH62TFkbPpzyRWbScytyWR4LXFnpS1MqoXz4eSRKKz17YCFkJXE542xmWVLoyZWC71JTDGagrzy+5Kp+3oQayRFXN9YPOZjiXrqe4wrNfhJXTmZCdVWvjziYGtK5azCKyxTrAXVkb8283maSpbhXykxbkqwdI8oZGzRZR+oPLraqasio8yJcowSu3JGvKZPiY/PuprKnlxeOcglH4Mqr3dVepM4yCwiFytZTbkSjZRJXnnXkqlXaAlExWUpr+QswqJXElefOarbWnbthKRPajNUG2dIqDss0c3GFSi+q9y+aIyWr5icaNSUx7eaGv5oWswu1bFI2P3PTxM32ctGCc6zD9+KKjca5aSIxMBQ2plRPuSN8xtvKOFboBrrhOI7hGAb541TzZzruR9VhjPCCfm9mjY37ZLXZJ0TOO4kLQeiz9VdELUL5ZQKqtzjBC/8Tkmwil0jPx6V4AZkb++cp0MTW7D18XjdMnG3Tz9+XKaN/dxij6ABH9Ew0K74iZNsWcKHfROYuum2frtPpGf87neYCC5VhjHgBDsjJyCkoil6cycs+3kw2Hlx5728RNYIr06WNK5ON75FrDOSzr+yJRl6DRx45bXmlkjzPO8KXNjSzwOS8Y8bxS3XYpzMX3KCHSLF9ou2/QxPepT0Mhu0zVnABHYhivNNhEQwXW2gdt4F2h8VwuNjDW/4ELuG1q2dzXL4P+p7sKa4GiPY3++v0jLwUZGiluBfUnxGcBo4gdLGGOZhDdHO4GEbfNW8aPQsmPlYwb7F/5tdDDzNc3pmaYEhxgSkqXd7BW1zqKEaGV3/PeHe4TT8XmN2hEo8MIij/14JczDzaeEBUPNyouIIT9Yf2IaAgKS58ls/b+HLBICM4tFkHb9xeDUeoP70re/G9ErDObjDp335DhA59iqsCHnNp0AbJs+uvCRE+ZbjaB/KkcfG2h8MV4ykF0aXPSV+G712Gy/Y3pBlcGQbB8BaXWiWR+tM7ME13Z8S3Scdt5m6YhKfNcdkaaaS9abAmdlSztD8YnxsElw1BcNkfFxLXDu4HFYy39JZmT0hLe8KXcmq1qaZwqD89IggiJoC3F0TcbEYU47F05nFcGuVbzJgR7A30JKC4/gFdDqm+dm1pNIprz5h95vc88uF6f6uu2OhI6s/fhJn2DIQQmx4vbywqIS/ZApddIRbsUswxXL/gGcX1i2ituz3EcYEgj+OyJ+0I2a1/iY1Yhiu0idWGmMXbnvjUthJ1czOZTBgugMh8+P3UYCYhn8MYrt2Wujre3+hL4PIx3syutKlNMiLVuRCpP+0d9SYWwNRtSAaEZjDx0kYl0lflSJ2bBd0Z4wP1rJi+2pFXJ/xrIvzLn3a73QumImbJ1G/FSuNqkybjLe0lODJRQ0C/NGi3rixPNBoNFrOYsr8NiWhoMaavA+OU/nWlmafRXbBbLEcvZlQCSupLWaaCdO80aWeu3olmAY+4TcP2tpH/dnEs379DJ/0D/3b24vrasduBgmvXEO8S49vi2/bGv9QimtSftE9H3yed2vs0GVx8vKcKuUIft0JWd0aE2fhINdk9eRBfQdAAT7EXcHHBNLlv93DdxQf4O/W9E5EeHOgt6NOJucvieJsnXDV9kU0VcO5JBQIMPmz2sSEe6sMwQ2Lyn1+MXIx/u7T6gvsTSEp83JafMIJvMCOX/rWgF3hTYbc02ikY2eF7Sl3hKtUErYttVqYoH6xqYB+dkUqDSIidcTrdtgcqO52cJ3jtjHddNa0WrrTD1MuQVCveW9Rrkr2guk3gUk95Fp4lU09f8p3bXP5Yr+86eKUutRUuaItN7m/iilkje8MirSEVl1G0GZ3A1SvC1ezF2L8NKz5Xz9iofQbXPJaF2BoDQlbhkXMrtsTsLAv4k7iKVtuSuIh4t75er9PPNCu41GpVN0rHFcuOdAppLdedMFwWWCa+VfANXPpduOILjOQ0J6oPVvP5eLXKb8qNrbQZRTuYz+Eii5nWR3PwYa30cJT/olrdF++soo6pUPHhG/cjVkXB9DwcNNfj1XqMBrm7y8p2r/6Ng4pxfen34loxXL0PvdW8B5dZfIASYlxSIXfcHOToCbHjqLnSUYEd4yvfJZ6ETcMFAzfqjOqfVrhc57tMAldpB04zcUHGHNU79UHBunms/Mo4AFMaLrYLQZS17BTkVXdcVal8ff2tSP87UhJChb8wQp26SmWcUixHPIpRybB+XPx/9B/dRa/6u99X/Z30q/6u/FV/h/+y/7eA/J+HtOX8P0S2F/2fB7IENT1pldcg7TSli8T/B4p+7uqY4mFbAAAAAElFTkSuQmCC"
                      width="350"
                      height="200"
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <CardActions>
              <Button
                variant="contained"
                href="/resto/mcd"
                className={classes.button}
              >
                Masuk
              </Button>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography>
                    <img
                      src="data:image/png;base64,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"
                      width="350"
                      height="200"
                    />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <CardActions>
              <Button
                variant="contained"
                href="/resto/bking"
                className={classes.button}
              >
                Masuk
              </Button>
            </CardActions>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
