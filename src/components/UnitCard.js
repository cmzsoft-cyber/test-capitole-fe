import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    relative:{
        position: "relative",
    }
});

const MyButton = styled(Button)({
    background: '#f50057',
    border: 0,
    borderRadius: 3,   
    color: 'white',
    height: 'auto',
    padding: '5px',
    marginRight: '5px',
    marginLeft: '5px'
});

const UnitCard = ({card}) => {

    const classes = useStyles();

    const { title, description, image} = card  

    const [ show, setShow ] = useState(false)

    return ( 
        <Grid item xs={12} lg={3} md={3}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <Card className={classes.relative}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}                      
                        alt={title}
                        image={image}
                        component="img"
                        onError={e => {
                            e.target.src = '/static/img/notfound.png'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { description }
                        </Typography>
                    </CardContent>
                </CardActionArea>                        
                {
                    show && (
                        <div className="button-content">
                            <div className="button-group">
                                <MyButton size="small" color="secondary">
                                    Editar
                                </MyButton>
                                <MyButton size="small" color="secondary">
                                    Eliminar
                                </MyButton>
                            </div>
                        </div>
                    )
                }       
            </Card>         
        </Grid>
    );
}
 
export default UnitCard;