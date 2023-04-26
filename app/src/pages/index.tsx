import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Header from '../components/Header';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: '100px'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16rem',
  },
  titleS: {
    padding: '10px',
  },
  divider: {
    marginBottom: '25px',
  },
  introduction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  introductionText: {
    padding: '15px'
  },
  img: {
    zIndex: -1,
    display: 'flex',
  },
  main: {
    padding: 1
  }
}));

export default function Home() {
  const classes = useStyles();
  const cardList = [
    {
      id: 0,
      title: 'Quarto 1',
      coverImage: '/quarto1/quarto1e2.jpg',
      description: "well meaning and kindly. a benevolent smile"
    },
    {
      id: 1,
      title: 'Quarto 2',
      coverImage: '/quarto1/quarto1e2.jpg',
      description: "well meaning and kindly. a benevolent smile"
    },
    {
      id: 2,
      title: 'Quarto 3',
      coverImage: '/quarto1/quarto1e2.jpg',
      description: "well meaning and kindly. a benevolent smile"
    },
    {
      id: 3,
      title: 'Quarto 4',
      coverImage: '/quarto4/cama.png',
      description: "well meaning and kindly. a benevolent smile"
    },
    {
      id: 4,
      title: 'Quarto 5',
      coverImage: '/quarto5/cama.png',
      description: "well meaning and kindly. a benevolent smile"
    },
    {
      id: 5,
      title: 'Quarto 6',
      coverImage: '/quarto6/cama.png',
      description: "well meaning and kindly. a benevolent smile"
    },
    {
      id: 6,
      title: 'Quarto 7',
      coverImage: '/quarto7/cama.png',
      description: "well meaning and kindly. a benevolent smile"
    },
    {
      id: 7,
      title: 'Chalé',
      coverImage: '/chale/rede.png',
      description: "well meaning and kindly. a benevolent smile"
    },
  ];

  return (
    <div>
      <Head>
        <title>Pousada Sol do Rosa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/logo.jpg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <Header />

      <main> 
        <Container>
          <Image
            alt="teste"
            src="https://i.imgur.com/2LWogXg.jpg"
            fill
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            className={classes.img} />
          <Box className={classes.title}>
          </Box>
        </Container>
        <Divider sx={{
          marginTop: '40%'
        }} ><Typography variant="body1" component="div" >
            Sobre
          </Typography></Divider>

        <Grid container className={classes.root} spacing={2}>
          <Grid item md={6}>
            <Image
              src="https://i.imgur.com/2LWogXg.jpg"
              alt="Picture of the author"
              width={800}
              height={600}
            />
          </Grid>
          <Grid item md={6} className={classes.introduction}>
            <Typography component="p" align='justify' className={classes.introductionText} >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores aspernatur dolorum enim tempore accusantium nobis
              architecto inventore quisquam perspiciatis quia dolores voluptates doloremque odit, aliquid repellat! Odio eaque accusamus ad?
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{
          marginTop: '6rem'
        }} >
          <Typography variant="body1" component="div" >
            Quartos
          </Typography>
        </Divider>
        <Grid container className={classes.root} spacing={2}>
          {
            cardList.map((card: any) => {
              return (
                <Grid item md={4} key={card.id}>
                  <Card id={card.id} title={card.title} description={card.description} coverImage={card.coverImage} />
                </Grid>
              )
            })
          }



          {/* <Grid item md={4}>
            <Card2 title={"Quarto 3 - 4"} />
          </Grid>

          <Grid item md={4}>
            <Card3 title={"Quarto 5 - 6 - 7"} />
          </Grid>

          <Grid item md={4}>
            <Card4 title={"Chalé"} />
          </Grid> */}
        </Grid>

      </main>
      <Footer />
    </div>
  )
}