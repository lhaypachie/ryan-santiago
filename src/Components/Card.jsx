import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    width: 200,
    margin: 10
  },
  media: {
    height: 150,
    width: 150,
    display: 'block',
    margin: '0 auto'
  }
});

export default function OutlinedCard( {image, title, text}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <CardMedia className={classes.media}
          image={image}
          title={title}
        />
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}
