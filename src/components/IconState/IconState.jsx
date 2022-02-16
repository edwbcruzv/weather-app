import React from 'react';
import PropTypes from 'prop-types';
import {WiCloudy,WiDayCloudy,WiDayFog,WiDaySunny,WiRain} from 'react-icons/wi'

// valores que se pueden recibir
export const validValues=[
    "cloud",
    "cloudy",
    "fog",
    "sunny",
    "rain" ]

// cada string tiene un icono asociado
const stateByName = {
    cloud: WiCloudy,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
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
