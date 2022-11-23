import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Footer.css"
import { BsGithub,BsTwitter,BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className='footer'>
        <Grid container>
            <Grid xs={12} sm={3} md={3} lg={3}>
                <Typography variant="caption" sx={{color: "#ffffff50"}}>call</Typography>
                <Typography variant="h6">+91 90822 36842</Typography>
            </Grid>
            <Grid xs={12} sm={3} md={3} lg={3}>
                <Typography variant="caption" sx={{color: "#ffffff50"}}>Email</Typography>
                <Typography variant="h6">sagarsethi1055@gmail.com</Typography>
            </Grid>
        </Grid>
        <Grid container sx={{margin: "30px 0px"}}>
            <Grid xs={12} sm={9} md={9} lg={9}> <Typography variant="caption" sx={{color: "#ffffff50"}}>© Sagar Sethi 2023</Typography></Grid>
            <Grid xs={12} sm={3} md={3} lg={3}>
                <div className='socialSec'>
                <Button target="_blank" href="https://github.com/sagarxoxo"><BsGithub color="#fff" size={30}/></Button>
                <Button target="_blank" href="https://twitter.com/home"><BsTwitter color="#fff" size={30}/></Button>
                <Button target="_blank" href="https://www.linkedin.com/in/sagar-sethi-782b34198/"><BsLinkedin color="#fff" size={30}/></Button>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
