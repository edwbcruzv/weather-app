import React from 'react';
import PropTypes from 'prop-types';
import {
    WiThunderstorm,
    WiRainMix,
    WiRain,
    WiSnow,
    WiFog,
    WiSmoke,
    WiDayHaze,
    WiDust,
    WiDayFog,
    WiSandstorm,
    WiVolcano,
    WiShowers,
    WiTornado,
    WiDaySunny,
    WiDayCloudy} from 'react-icons/wi'

// valores que se pueden recibir validados por prop-types
export const validValues=[
    "thunderstorm",
    "drizzle",
    "rain",
    "snow",
    "mist",
    "smoke",
    "haze",
    "dust",
    "fog",
    "sand",
    "dust",
    "ash",
    "squall",
    "tornado",
    "clear",
    "clouds"
    ]

// cada string se debe asociar para mostrar el icono correcto
// los iconos estan en react-icons
const stateByName = {
    thunderstorm:WiThunderstorm,
    drizzle:WiRainMix,
    rain:WiRain,
    snow:WiSnow,
    mist:WiFog,
    smoke:WiSmoke,
    haze:WiDayHaze,
    dust:WiDust,
    fog:WiDayFog,
    sand:WiSandstorm,
    ash:WiVolcano,
    squall:WiShowers,
    tornado:WiTornado,
    clear:WiDaySunny,
    clouds:WiDayCloudy
}

/**
 * Se recibira un estado que este en la lista de "validValues",
 * para renderizar el icono correspondiente
 * @param {state="snow"} param0 
 * @returns 
 */
const IconState = ({state}) => {
    //se obtiene el icono y se almacena en Icon
    const Icon = stateByName[state]
    // console.log("Nombre del icono:",state)
  return (
      <Icon/>//se muestra el icono
  )
};

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired, //se valida el parametro recibido
};

export default IconState;
