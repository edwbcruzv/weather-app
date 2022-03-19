import React from 'react'
import { Link } from 'react-router-dom'
import { Link as RouterLink} from '@mui/material'
import { Grid } from '@mui/material'
import {IconContext} from 'react-icons'
import {WiRain} from 'react-icons/wi'
import {Typography} from '@mui/material'

const NotFoundPage = () => {
  return (
    <Grid container 
    direction="column"
    justifyContent="center"
    className="full">
      <div className="highlight">
          <Grid item container 
            xs={12}
            justifyContent="center"
            alignItems="center" >
             <Grid item>
                <IconContext.Provider value={{size:"6em"}}>
                  <WiRain/>
                </IconContext.Provider>
              </Grid>
              <Grid item
                container
                direction="column"
                justifyContent="center"
                alignItems="center" >
                <Typography variant="h4" color="inherit" >
                  404 | La pagina no existe
                </Typography>
                <Link color="inherit" 
                  aria-label="menu" 
                  component={RouterLink}
                  to="/" >
                    Regresar

                </Link>
                </Grid>
          </Grid>
      </div>
    </Grid>
  )
}


export default NotFoundPage