import React from 'react'
import {CardData} from './CardData'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from './Card'

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px",
      backgroundColor: 'white'
    }
  });

export default function Cards() {
    const classes = useStyles();

    return ( 
        <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
        >
            {CardData.map((d) => {
            var toolImage = 'images/tools/'+d.image
            return (
                <Card image={toolImage} title={d.title} text={d.text}/>
            )
                
            })}
        </Grid>
        
    )
}
