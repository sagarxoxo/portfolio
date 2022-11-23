import { Typography } from '@mui/material'
import React from 'react'
import "./Hero.css"

export default function HeadingHero(props) {
  return (
    <div className='ccPort'>
        <Typography variant="h2">
            {props.title}
        </Typography>
        <div className='divider'></div>
    </div>
  )
}
