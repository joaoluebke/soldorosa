import React from 'react';
import Link from 'next/link';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const useStyles = makeStyles((theme: Theme) => createStyles({
    headerStyle: {
        background: 'transparent',
        boxShadow: 'none', 
    },
    toolbarStyle: { 
        marginTop: 25,
        backgroundColor: '#5187b6',
        width: '50%',
        alignSelf: 'center', 
        borderRadius: '15px'
    },
    whatsapp: {
        color: 'white',
        marginLeft: '1rem',
        '&:hover': { 
            color: '#25D366',
        } 
    },
    instagram: {
        color: 'white',
        marginLeft: '1rem',
        '&:hover': {
            color: '#E1306C',
        }
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar className={classes.headerStyle}>
            <Toolbar className={classes.toolbarStyle}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="white" >
                    Pousada Sol do Rosa
                </Typography>
                <Link href="https://www.instagram.com/pousadasoldorosa/">
                    <InstagramIcon className={classes.instagram} />
                </Link>
                <Link href="https://wa.me/5547988328709">
                    <WhatsAppIcon className={classes.whatsapp} />
                </Link>
            </Toolbar>
        </AppBar>
    ); 
}