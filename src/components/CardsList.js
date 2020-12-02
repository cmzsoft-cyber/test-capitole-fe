import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import UnitCard from './UnitCard'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import UpdateIcon from '@material-ui/icons/Update';

// Redux actions
import { sortAlphabetical, sortCreatedDate } from '../actions/cardAction'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
});

const CardsList = () => {

    // Cards state
    const cards = useSelector(state => state.cards.cards )

    const classes = useStyles();

    const [ ordertitle, setOrderTitle ] = useState(false)
    const [ orderdate, setOrderDate ] = useState(false)

    const dispatch = useDispatch()

    const orderByTitle = () => {
      setOrderTitle(!ordertitle)
      dispatch(sortAlphabetical(ordertitle))      
    }

    const orderByDate = () => {
      setOrderDate(!orderdate)
      dispatch(sortCreatedDate(orderdate))
    }

    return ( 
      <>
        <div className="col s12 right-align colFilters">
          <Button 
            variant="contained" 
            color="secondary" 
            title="Ordenar por título ASC/DESC"
            onClick={()=>orderByTitle()}
          >
            <SortByAlphaIcon className="custom-icon"/>
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            title="Ordenar por creación ASC/DESC"
            onClick={()=>orderByDate()}
          >
            <UpdateIcon className="custom-icon"/>
          </Button>
        </div>

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
      </>
    );
    
}
 
export default CardsList;