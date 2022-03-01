import React from 'react'

import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import { Grid } from '@mui/material'

const WelcomePage = () => {
  return (
    <WelcomeScreen>
        <Grid container 
        direction="column"
        justify="center"
        className="full">
          <div className="highlight">

          </div>


        </Grid>
    </WelcomeScreen>
  )
}


export default WelcomePage