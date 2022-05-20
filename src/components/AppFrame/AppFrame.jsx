import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import { AppBar, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material'

import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const AppFrame = ({children}) => {
  return (
    <div>
        <Grid container
            justifyContent="center"
            >
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton color="inherit" aria-label="menu">
                            <Link component={LinkRouter}
                                to="/main" 
                                color="inherit" 
                                aria-label="menu">
                                <IconContext.Provider value={{size:'2em'}}>
                                    <WiDaySunny></WiDaySunny>
                                </IconContext.Provider>

                            </Link>

                        </IconButton>
                        <IconButton color="inherit" aria-label="menu">
                            <Link component={LinkRouter}
                                to="/" 
                                color="inherit" 
                                aria-label="menu">
                        <Typography variant="h6">
                            Weather App
                        </Typography>
                        </Link>

                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Grid item
                    xs={12} sm={11} md={10} lg={8}>
                        {children}
                    </Grid>

        </Grid>
    </div>
  )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame