import React from 'react';
import ForecastItem from './ForecastItem';

export default {
    title:"ForecastItem",
    component: ForecastItem
}
export const LunesSoleado = () => {
    return <ForecastItem weekDay="Lunes" hour={10} state="snow" temperature={40}  />
}