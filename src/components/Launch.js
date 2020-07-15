import React from "react";
import { Link, useParams } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  rootUp: {
    maxWidth: 345,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 350,
  },
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
}));
export const Launch = () => {
  const classes = useStyles();
  return (
    <div>
      {Object.entries(shoes).map(([id, { name, img }]) => (
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Card className={classes.rootUp} key={id}>
              <Link to={`/product/${id}`}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={img}
                    title="Shoes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export const LaunchShoe = () => {
  const classes = useStyles();

  const { id } = useParams();
  const shoe = shoes[id];
  const { name, img } = shoe;
  return (
 
      <div>
          <Card className={classes.root} style={{height:"250px"}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
        
        </CardContent>
       
      </div>
      <CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      />
    </Card>

      </div>
  
  );
};
const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};
