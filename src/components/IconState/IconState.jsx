import React from 'react';
import PropTypes from 'prop-types';
import {
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop, 
    WiThunderstorm} from 'react-icons/wi'

// valores que se pueden recibir
export const validValues=[
    
    "clouds",
    "clear",
    "sunny",
    "rain",
    "snow",
    "drizzle",
    "thunderstorm"
     ]

// cada string tiene un icono asociado
const stateByName = {
    clouds: WiDayCloudy,
    fog: WiDayFog,
    clear: WiDaySunny,
    rain: WiRain,
    snow:WiSnow,
    drizzle: WiRaindrop,
    thunderstorm:WiThunderstorm
}

const IconState = ({state}) => {
    //se obtiene el icono y se almacena en Icon
    const Icon = stateByName[state]
  return (
      <Icon/>//se muestra el icono
  )
};

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired, //se valida el parametro recibido
};

export default IconState;
