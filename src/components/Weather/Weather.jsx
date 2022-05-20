import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import IconState, {validValues} from '../IconState/IconState';
import {IconContext} from 'react-icons'
import { Grid } from '@mui/material';


const Weather = ({temperature,state}) => {
    return (
        <Grid container item
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <IconContext.Provider value={{size:'6em'}}> <IconState state={state}/> </IconContext.Provider>
            
            <Typography display="inline" variant="h2">{temperature}</Typography>
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}


export default Weather