
import React from 'react'
import {BrowserRouter as Router,
        Routes,
        Route } from 'react-router-dom'

import { Grid } from '@mui/material'

import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'


const App = props => {
  return (
    <Grid container
        justify="center"
        direction="row" >

        <Grid item 
            xs={12}
            sm={11}
            md={10}
            lg={8}>
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage/>}> </Route>
                    <Route path="/main*" element={<MainPage/>}> </Route>
                    <Route path="/city" element={<CityPage/>}> </Route>
                    <Route path="*" element={<NotFoundPage/>}> </Route>
                </Routes>
            </Router>

        </Grid>
    </Grid>
  )
}


export default App