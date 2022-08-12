import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';


/**
 * El compopnente solo acomoda la humedad y el viento, y da formato con typography
 * @param {humidity={10} wind={5}} param0 
 * @returns 
 */
const WeatherDetails = ({humidity,wind}) => {
  return <div>
        <Typography align='center' >Humedad:{humidity}%</Typography>
        <Typography align='center'  >Viento:{wind}km/h</Typography>
  </div>;
};

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
};

export default WeatherDetails;
