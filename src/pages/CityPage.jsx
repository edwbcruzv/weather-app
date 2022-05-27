import React from 'react'

import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from'../components/ForecastChart'
import AppFrame from '../components/AppFrame/AppFrame'

import { Grid } from '@mui/material'


const CityPage = () => {
  const data = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

  const forecastItemList=[
    {weekDay:"Lunes",hour:10,state:"clouds",temperature:30},
    {weekDay:"Martes",hour:20,state:"clear",temperature:40},
    {weekDay:"Miercoles",hour:30,state:"thunderstorm",temperature:50},
    {weekDay:"Jueves",hour:40,state:"sunny",temperature:60},
    {weekDay:"Viernes",hour:50,state:"rain",temperature:70},
    {weekDay:"Sabado",hour:60,state:"drizzle",temperature:80},
  ]

  const city="Mexico"
  const country="CDMX"
  const temperature=10 
  const state="sunny"
  const humidity=25 
  const wind=6


  return (

    <AppFrame>
      <Grid container
      justifyContent="space-around"
      direction="column"
      spacing={2}>
        <Grid item container
          xs={12}
          justifyContent="center"
          alignItems="flex_end">
          <CityInfo city={city} country={country}/>
        </Grid>

        <Grid item xs={12}
        justifyContent="center" >
            <Weather state={state} temperature={temperature}/>
            <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        
        <Grid item>
          <ForecastChart data={data}/>
        </Grid>
        <Grid item>
          <Forecast forecastItemList={forecastItemList}/>
        </Grid>
    </Grid>
    </AppFrame>

    
  )
}

CityPage.propTypes = {}

export default CityPage