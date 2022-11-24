import { Grid, Typography } from '@mui/material'
import React from 'react'
import HeadingHero from '../Hero/HeadingHero'
import "./Technologies.css"
import {techData} from "../../data/techData"

export default function Technologies() {
  return (
    <div className='techSection' id="Technologies">
        <HeadingHero title={"Technologies"} />
        <Typography variant='subtitle1'>
            I've worked with a range a technologies in the web development world. From Back-end To Design
        </Typography>
        <br/>
        <div className='techDat'>
        <Grid container >
            {techData.map((data, index) => {
                return (
                    <Grid xs={12} sm={4} md={4} lg={4} spacing={2} className="techSt" key={index}>
                        {data.icon1 && data.icon1}
                        {data.icon2 && data.icon2}
                        <Typography variant="h3">{data.title}</Typography>
                        <Typography variant='subtitle2' className='sub'>{data.desc}</Typography>
                    </Grid>
                )
            })}
        </Grid>
        </div>
    </div>
  )
}
