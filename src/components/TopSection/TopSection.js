import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import "./TopSection.css"
import Lottie from 'react-lottie';
import animationData from '../../lotties/comps.json';

export default function TopSection() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
    };

  return (
    <Grid direction="row" container>
    <Grid className='topSection' xs={12} sm={6} md={6} lg={6} >
        <Typography variant='h3'>Hello, I Am</Typography>
        <Typography variant='h1'>Sagar Sethi</Typography>
        <Typography variant='h4'>Welcome To My Personal Portfolio!</Typography>
        <Typography variant='subtitle1'>
            A Web Developer passionate about creating interactive <br />
            applications and experiences on the web.
        </Typography>
        <Button target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sagarsethi1055@gmail.com" variant="contained">Contact Me</Button>
    </Grid>
    <Grid className='topSection' xs={12} sm={6} md={6} lg={6} sx={{display: {xs: 'none', sm: 'block',md: 'block',lg: 'block',}}}>
    <div className='animation'>
        <Lottie 
            options={defaultOptions}
            width={500}
            height={360}
        />
    </div>
    </Grid>
    </Grid>
  )
}
