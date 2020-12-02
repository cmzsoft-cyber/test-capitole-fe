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
import EditModal from './EditModal';

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
    const { id, title, description, image, date} = card  
    const [ show, setShow ] = useState(false)
    
    // Delete Modal State
    const [openDelete, setOpenDelete] = useState(false);
    const toggleDelete = () => {
        setOpenDelete(!openDelete);
        setShow(false)
    }; 

    // Edit Modal State
    const [openUpdate, setOpenUpdate] = useState(false);
    const toggleUpdate = () => {
        setOpenUpdate(!openUpdate);
        setShow(false)
    }; 

    const defaultImg = '/static/img/notfound.png'

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
                        image={image ? image : defaultImg}
                        component="img"
                        onError={e => {
                            e.target.src = defaultImg
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="overflow-ellipsis">
                            { description }
                        </Typography>
                    </CardContent>
                </CardActionArea>                        
                {
                    show && (
                        <div className="button-content">
                            <div className="button-group">
                                <CustomButton size="small" color="secondary" onClick={()=>toggleUpdate()}>
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

            <EditModal
                id={id}
                title={title}
                description={description}
                image={image}
                date={date}
                openUpdate={openUpdate}
                toggleUpdate={toggleUpdate}
                CustomButton={CustomButton}
            />

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