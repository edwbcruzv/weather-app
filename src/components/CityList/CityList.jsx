import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import { Grid, List, ListItem } from '@mui/material'
import Weather from "../Weather"
import axios from 'axios'


const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather )=>{

    const{city,country} = cityAndCountry
    // const{temperature,state} =weather

    console.log(city,country)

    return (
        <ListItem botton key={city} onClick={eventOnClickCity} >
            <Grid container
                justifyContent="center"
                alignItems="center">
                <Grid item
                    md={8}
                    xs={12}>           
                    <CityInfo city={city} country={country}></CityInfo>     
                </Grid>
                <Grid item
                    md={4}
                    xs={12}> 
                    {
                        weather?(
                    <Weather temperature={weather.temperature} 
                    state={weather.state}></Weather>):("No hay datos")
                    }
                </Grid>
            </Grid>
            
            
        </ListItem>
    )
}


// cities: array, que cada item tiene una city y ademas el country
const CityList = ({cities,onClickCity}) => {
    const [allWeather, setAllWeather] = useState({})
    /* estructura esperada, lo que trae allWeather
            [ciudad]:{datos}
            [ciudad]:{datos}
            [ciudad]:{datos}
        */

    useEffect(() => {
        const setWeather=(city,country,countryCode)=>{
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=9cf748c04e6ae0f475486f0f2fcc3e53`)
        .then(response=>{
            const {data}=response
            const temperature=data.main.temp
            const state =data.weather[0].main.toLowerCase()

            const propName=`${city}-${country}` // Ej: [Ciudad de Mexico -CDMX]
            const propValue={temperature,state} // Ej: {temperature:20,state:"sunny"}
            console.log("propName",propName)
            console.log("propValue",propValue)
            /*
                {
                    [Ciudad de Mexico -CDMX]:{temperature:20,state:"sunny"}
                }
            */
           // set[variable_estados](variable_estado=variable_estado+1)
            setAllWeather(allWeather=>{
                    const result={...allWeather,[propName]:propValue}
                    // console.log("allWeather [result]",result)
                    return result
                    }
                ) //destructuring
        })
    }

        cities.forEach(({city,country,countryCode}) => {
            setWeather(city,country,countryCode)
        });

    }, [cities])
    


    //const weather={temperature:25 , state:"sunny"}
    return (
        <List>
            {
                cities.map(cityAndCountry=>renderCityAndCountry(onClickCity)(cityAndCountry,
                    allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }            
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
          city:PropTypes.string.isRequired,
          country:PropTypes.string.isRequired,
          countryCode:PropTypes.string.isRequired

        }).isRequired
    ).isRequired,

    onClickCity: PropTypes.func.isRequired
}

export default CityList
