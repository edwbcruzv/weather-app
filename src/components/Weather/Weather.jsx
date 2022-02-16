import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import IconState, {validValues} from '../IconState/IconState';
import {IconContext} from 'react-icons'


const Weather = ({temperature,state}) => {
    return (
        <div>
            <IconContext.Provider value={{size:'6em'}}> <IconState state={state}/> </IconContext.Provider>
            
            <Typography display="inline" variant="h2">{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}


export default Weather