import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import { Grid } from '@mui/material'; 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WifiIcon from '@mui/icons-material/Wifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
 
interface CardProps { 
    title: string,
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px', 
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14, 
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 240,
    }, 
    cardOptions: {
        justifyContent: 'center',

    },
    btnCardOptions: {
        background: '#5187b6',
        color: 'white',
        '&:hover': {
            background: '#7fa7c9',
        }
    },
    icons: {
        justifyContent: 'flex-end', 
        display: 'flex' 
    },
    icon: {  
        marginLeft: '0.5rem',
        color: '#7fa7c9'
    }
});

export default function OutlinedCard({ title }: CardProps) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardMedia
                className={classes.media}  
                image={"https://i.imgur.com/Z599JTE.jpg"}
                title="Quarto 5 ao 7"
            /> 
            <CardContent>
                <Typography variant="h5" component="h2">
                    <Grid container className={classes.root} >
                        <Grid item lg={6}>
                            {title}
                        </Grid>
                        <Grid item lg={6} className={classes.icons} >
                            <AcUnitIcon className={classes.icon} />
                            <WifiIcon className={classes.icon} />
                            <KitchenIcon className={classes.icon} />
                            <ConnectedTvIcon className={classes.icon} />
                        </Grid>
                    </Grid>
                </Typography> 
                <Typography variant="body2" component="p">
                    well meaning and kindly. 
                    <br /> 
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardOptions}>
                <Button className={classes.btnCardOptions} size="small">Ver quarto</Button>
            </CardActions>
        </Card>
    );
}
