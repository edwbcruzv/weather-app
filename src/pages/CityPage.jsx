import React from 'react'
import 'moment/locale/es-mx'
import { useParams } from 'react-router-dom'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from'../components/ForecastChart'
import AppFrame from '../components/AppFrame/AppFrame'
import { Grid, LinearProgress} from '@mui/material'
import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'


//   const dataExample = [
//     {
//         "dayHour": "Jue 18",
//         "min": 14,
//         "max": 22,
//     },
//     {
//         "dayHour": "Vie 06",
//         "min": 18,
//         "max": 27,
//     },
//     {
//         "dayHour": "Vie 12",
//         "min": 18,
//         "max": 28,
//     },
//     {
//         "dayHour": "Vie 18",
//         "min": 18,
//         "max": 25,
//     },
//     {
//         "dayHour": "Sab 06",
//         "min": 15,
//         "max": 22,
//     },
//     {
//         "dayHour": "Sab 12",
//         "min": 12,
//         "max": 19,
//     }
// ]

//     const forecastItemListExample=[
//       {weekDay:"Lunes",hour:10,state:"clouds",temperature:30},
//       {weekDay:"Martes",hour:2,state:"clear",temperature:40},
//       {weekDay:"Miercoles",hour:3,state:"snow",temperature:50},
//       {weekDay:"Jueves",hour:4,state:"drizzle",temperature:60},
//       {weekDay:"Viernes",hour:5,state:"rain",temperature:70},
//       {weekDay:"Sabado",hour:6,state:"thunderstorm",temperature:80},
//     ]


/**
 * 
 * @returns 
 */
const CityPage = () => {
  const params=useParams()
  console.log("params:",params)

  const {data,forecastItemList} = useCityPage(params)
  

  const {allWeather}=useCityList([{city:params.city,country:undefined,countryCode:params.countryCode}])

  const weather=allWeather[`${params.city}-undefined`]
  console.log("weather",weather)

  const city=params.city
  const country=params.countryCode
  const temperature=weather && weather.temperature
  const state=weather && weather.state
  const humidity=weather && weather.humidity
  const wind=weather && weather.wind
  // const data=dataExample
  // const forecastItemList=forecastItemListExample



  return (

    <AppFrame>
      <Grid container
      justifyContent="space-around"
      direction="column"
      spacing={2}
      >
        <Grid item container
          xs={12}
          justifyContent="center"
          alignItems="flex_end"
          >
          <CityInfo city={city} country={country}/>
        </Grid>

        <Grid item 
        xs={12}
        justifyContent="center" 
        >
            {
              temperature && state && <Weather temperature={temperature} state={state}/>
            }
            {
              humidity && wind && <WeatherDetails humidity={humidity} wind={wind} />
            }
        </Grid>
        <Grid item>
            {
              !data && !forecastItemList && <LinearProgress/>
            }
        </Grid>
        <Grid item>
          {data && <ForecastChart data={data}/>}
        </Grid>
        <Grid item>
          {forecastItemList&&<Forecast forecastItemList={forecastItemList}/>}
        </Grid>
    </Grid>
    </AppFrame>

    
  )
}

CityPage.propTypes = {}

export default CityPage