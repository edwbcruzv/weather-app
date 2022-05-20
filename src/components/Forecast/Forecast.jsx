import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import ForecastItem from '../ForecastItem';
import {validValues} from '../IconState/IconState';

const renderForecastItem = forecast =>{
    const {weekDay,hour,state,temperature}=forecast //destructuring
    return(
        <Grid item>
            <ForecastItem  weekDay={weekDay} hour={hour} state={state} temperature={temperature}  ></ForecastItem>

        </Grid>
    )
}

const Forecast = ({forecastItemList}) => {
  return(
      <Grid container
        justifyContent="space-around"
        alignItems="center">
            {
                forecastItemList.map(forecast => renderForecastItem(forecast))
            }
        </Grid>
  )
};

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(
        PropTypes.shape({
            weekDay: PropTypes.string.isRequired,
            hour: PropTypes.number.isRequired,
            state: PropTypes.oneOf(validValues).isRequired,
            temperature: PropTypes.number.isRequired
        }).isRequired
        
    ).isRequired
};

export default Forecast;
