import React from 'react';
import Forecast from './Forecast'


export default {
    title:"Forecast",
    component: Forecast
}


const forecastItemList=[
    {weekDay:"Lunes",hour:10,state:"clouds",temperature:30},
    {weekDay:"Martes",hour:2,state:"clear",temperature:40},
    {weekDay:"Miercoles",hour:3,state:"snow",temperature:50},
    {weekDay:"Jueves",hour:4,state:"drizzle",temperature:60},
    {weekDay:"Viernes",hour:5,state:"rain",temperature:70},
    {weekDay:"Sabado",hour:6,state:"thunderstorm",temperature:80},
]


export const ForecastExample = () => (

    <Forecast forecastItemList={forecastItemList}/>
)
