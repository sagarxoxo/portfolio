import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./Portfolio.css"
import {portfolioData} from "../../data/portfolioData"
import HeadingHero from '../Hero/HeadingHero';

export default function Portfolio() {

    const [n, setN] = useState(4);

  return (
    <div className='portfolioSec'>
        <HeadingHero title="My Portfolio"/>
        <Grid container spacing={6} sx={{marginTop: "10px",}}>
        {(portfolioData).slice(0,n).map((data, index) => {
            return (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                <Card className='cardPortfolio'>
                    <CardContent>
                        <div className='btnContainer'>{data.techUse.map((tech, index) => <Button  key={index}variant="text" className="techBtn">{tech}</Button>)}</div>
                        <div className='titleConatiner' >
                            <Typography variant='h3'>
                                <span className='slash'>/</span> {data.title}
                            </Typography>
                            <div>
                                {data.live &&<Button variant="text" target="_blank" href={data.live}>Live</Button>}
                                {data.repo && <Button variant="text" target="_blank" href={data.repo}>Repo</Button>}
                            </div>
                        </div>
                        <Typography variant='subtitle1' className="hhe" sx={{color: "#ffffff70", marginTop: "10px", fontSize: "1.1rem"}}>
                            {data.desc}
                        </Typography>
                        <a target="_blank" href={data.live}><img src={data.portImg} className="portfolioImge"/></a>
                    </CardContent>
                </Card>
            </Grid>
            )
        }) }
        <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
            { n === 4 &&<Button className="viewBtn" onClick={() => setN(portfolioData.length)} >View More</Button> }
            { n !== 4 && <Button className="viewBtn" onClick={() => setN(4)} >View Less</Button>}
        </Grid>
    </Grid>
    </div>
  )
}
