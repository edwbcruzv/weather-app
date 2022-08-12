import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import ForecastItem from '../ForecastItem';
import {validValues} from '../IconState/IconState';


/**
 * cada componente renderizado tendra la propiedad de item y el estilo lo dara ForecastItem
 * @param {weekDay:"Lunes",hour:10,state:"clouds",temperature:30} forecast 
 * @returns 
 */
const renderForecastItem = (index,{weekDay,hour,state,temperature}) =>{
    
    return(
        <Grid item
        key={index}>
            <ForecastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature}  ></ForecastItem>

        </Grid>
    )
}
/**
 * Se recibe una lista de objetos,cada objeto sera renderizado en su propio componente.
 * Cada objeto tendra los siguientes propiedades: {weekDay:"Lunes",hour:10,state:"clouds",temperature:30}
 * @param {[obj1,obj2,..,obj n]}
 * @returns 
 */
const Forecast = ({forecastItemList}) => {
  return(
      <Grid container
        justifyContent="space-around"
        alignItems="center">
            { /* Renderizando cada objeto en su propio componente */
                forecastItemList.map((forecast,index) => renderForecastItem(index,forecast))
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
