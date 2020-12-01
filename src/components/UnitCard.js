import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

// Delete Modal
import DeleteModal from './DeleteModal'

// Edit Modal

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

const CustomButton = styled(Button)({
    background: '#f50057',
    border: 0,
    borderRadius: 3,   
    color: 'white',
    height: 'auto',
    padding: '8px',
    marginRight: '5px',
    marginLeft: '5px'
});

const UnitCard = ({card}) => {

    const classes = useStyles()
    const { id, title, description, image} = card  
    const [ show, setShow ] = useState(false)
    
    // Delete Modal
    const [openDelete, setOpenDelete] = useState(false);
    const toggleDelete = () => {
        setOpenDelete(!openDelete);
        setShow(false)
    }; 

    // Edit Modal

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
                                <CustomButton size="small" color="secondary">
                                    Editar
                                </CustomButton>
                                <CustomButton size="small" color="secondary" onClick={()=>toggleDelete()}>
                                    Eliminar
                                </CustomButton>
                            </div>
                        </div>
                    )
                }       
            </Card>  

            <DeleteModal 
                id={id}
                openDelete={openDelete}               
                toggleDelete={toggleDelete}
                CustomButton={CustomButton}
            />

        </Grid>

    );
}
 
export default UnitCard;