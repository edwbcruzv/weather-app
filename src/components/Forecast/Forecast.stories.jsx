import React from 'react';
import Forecast from './Forecast'


export default {
    title:"Forecast",
    component: Forecast
}

const forecastItemList=[
    {weekDay:"Lunes",hour:10,state:"cloud",temperature:30},
    {weekDay:"Martes",hour:20,state:"cloudy",temperature:40},
    {weekDay:"Miercoles",hour:30,state:"fog",temperature:50},
    {weekDay:"Jueves",hour:40,state:"sunny",temperature:60},
    {weekDay:"Viernes",hour:50,state:"rain",temperature:70},
    {weekDay:"Sabado",hour:60,state:"sunny",temperature:80},
]


export const ForecastExample = () => (

    <Forecast forecastItemList={forecastItemList}/>
)
