import React from 'react';
import { useSelector } from 'react-redux'
import UnitCard from './UnitCard'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
});

const CardsList = () => {

    // Cards state
    const cards = useSelector(state => state.cards.cards )

    const classes = useStyles();

    return ( 
      <Grid container className={classes.root} spacing={4}>
          { 
            cards &&
              cards.map(card => (                
                <UnitCard
                  key={card.id}
                  card={card}
                />
              ))
          }
      </Grid>
    );
}
 
export default CardsList;