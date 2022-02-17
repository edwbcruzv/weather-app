import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import { Grid, List, ListItem } from '@mui/material'
import Weather from "../Weather"

const renderCityAndCountry = eventOnClickCity => cityAndCountry =>{

    const{city,country} = cityAndCountry
    console.log(city,country)

    return (
        <ListItem botton key={city} onClick={eventOnClickCity} >
            <Grid container
                justify="center"
                alignItemps="center">
                <Grid item
                    md={8}
                    xs={12}>           
                    <CityInfo city={city} country={country}></CityInfo>     
                </Grid>
                <Grid item
                    md={4}
                    xs={12}> 
                    <Weather temperature={10} state="rain"></Weather>
                </Grid>
            </Grid>
            
            
        </ListItem>
    )
}


// cities: array, que cada item tiene una city y ademas el country
const CityList = ({cities,onClickCity}) => {
    return (
        <List>
            {
                cities.map(cityAndCountry=>renderCityAndCountry(onClickCity)(cityAndCountry))
            }            
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
