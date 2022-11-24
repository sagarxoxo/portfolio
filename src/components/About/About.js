import { Grid, Typography } from '@mui/material'
import React from 'react'
import HeadingHero from '../Hero/HeadingHero'
import "./About.css"
import {timelineData} from "../../data/timeLineData"

export default function About() {
  return (
    <div className='aboutSection' id="About">
        <HeadingHero title={"About Me"}/>
        <Typography variant='subtitle1' sx={{color: "#ffffff70", marginTop: "10px"}}>
        I'm a front-end web developer with a background in computer science. 
        I am passionate about coding and solving problems through code, and I enjoy creating things that live on the internet.<br />
        My web development journey started in 2019 when I began making a site with HTML, CSS & Javascript. 
        So I enjoyed creating sites and started working as a freelance. 
        But to create a site with HTML, CSS & Javascript, you have to write many lines of code. Then I learned about React and enjoyed creating a site with React.
        </Typography>
        <Grid container sx={{margin: "30px 0px"}}>
            {timelineData.map((data, index) => {
                return (
                    <Grid xs={12} sm={12 / timelineData.length} md={12 / timelineData.length} lg={12 / timelineData.length} key={index} className="timelineSt">
                      <div className='timelineTitle'>
                        <Typography variant="h4" sx={{fontWeight: "500"}}>{data.year}
                        <img src="/images/timeline.svg" width="50%"/></Typography>
                      </div>
                        <Typography variant='span' sx={{color: "#ffffff99", fontSize: "1rem"}}>{data.desc}</Typography>
                    </Grid>
                )
            })}
        </Grid>
    </div>
  )
}
