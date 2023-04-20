import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        minWidth: '75%',
        minHeight: '50%',
        maxWidth: '100%',
        height: 'auto'
    },  
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Carrousel(props: any) {
    const classes = useStyles();

    var items = [
        {
            id: 0,
            name: "Random Namse #1",
            description: "Probably the most random thing you have ever seen!",
            imgUrl: "https://magazine.zarpo.com.br/wp-content/uploads/2019/02/conheca-as-melhores-praias-de-punta-cana-770x500.jpg"
        },
        {
            id: 1,
            name: "Random Name #2s",
            description: "Hello World!",
            imgUrl: "https://magazine.zarpo.com.br/wp-content/uploads/2019/02/cabeza-de-toro_zarpo-2.jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => {
                    return (
                        <Box maxWidth={'100%'} key={item.id}>
                            <Image
                                key={item.id}
                                src={item.imgUrl}
                                alt={item.name}
                                className={classes.paper}
                                loading="lazy"
                            />
                        </Box>)
                })
            }
        </Carousel>
    )
}