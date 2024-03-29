import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import {IconContext} from 'react-icons'
import IconState, {validValues} from '../IconState/IconState';

/**
 * De Las Propiedades recibidas seran acomodada
 * @param {weekDay="Lunes",hour={10},state="snow",temperature={40}}
 * @returns 
 */
const ForecastItem = ({weekDay,hour,state,temperature}) => {
  return (
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >

        <Grid item>
            <Typography>{weekDay}</Typography>
        </Grid>

        <Grid item>
            <Typography>{hour}</Typography>
        </Grid>
        
        <Grid item>
            <IconContext.Provider value={{size:'6em'}}> <IconState state={state} /> </IconContext.Provider>
        </Grid>

        <Grid item>
            <Typography>{temperature}</Typography>
        </Grid>

        </Grid>
  )
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired
};

export default ForecastItem;
