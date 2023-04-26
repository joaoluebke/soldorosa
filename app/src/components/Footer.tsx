import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        marginTop: '3rem'
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Divider sx={{
                marginTop: '3rem',
                marginBottom: '1rem'
            }} ></Divider>
            <Box component="footer">
                <Container maxWidth="lg">
                    <Typography variant="body1" align="center">
                        {'Pousada Sol do Rosa  © '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Container>
            </Box>
        </footer>
    );
}