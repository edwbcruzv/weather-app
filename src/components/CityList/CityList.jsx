import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import { Alert, Grid, List, ListItem } from '@mui/material'
import Weather from "../Weather"
import useCityList from '../../hooks/useCityList'



/**
 * Este componente contendra pais, coudad, icono, temperatura y estado del clima.
 * @param {Funcion que respondera cada item} eventOnClickCity 
 * @param {"Pais"} city 
 * @param {"Capital del pais"} country 
 * @param {"Codigo de 2 o 3 caracteres"} countryCode 
 * @param {"["Capital-Pais"]:{temperature:20,state:"sunny"}"} weather 
 * @returns 
 */
const renderCityAndCountry = (eventOnClickCity,city,country,countryCode, weather )=>{

    

    return (
        <ListItem  key={city} onClick={()=>{
            return eventOnClickCity(city,countryCode)
        }} >
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
                    
                    <Weather temperature={weather && weather.temperature} 
                    state={weather && weather.state}></Weather>
                </Grid>
            </Grid>
        </ListItem>
    )
}




/**
 * El componente Renderizara una lista de objetos, el tamaño de la lista dependera 
 * del numero de objetos recibidos.
 * Cada objeto tendra las propiedades:{city : "Buenos Aires",country:"Argentina",countryCode:"AR"}
 * Cada objeto respondera a una funcion en comun
 * @param {[obj1,obj2,....obj n],funcion} param0 
 * @returns 
 */
const CityList = ({cities,onClickCity}) => {

    const {allWeather,error,setError} = useCityList(cities)
    
    return (
        <div>
            {
                error && <Alert onClose={()=>{setError(null)}} severity='error'>{error}</Alert>
            }
            <List>
                {   
                    cities.map(({city,country,countryCode}) => {
                        return renderCityAndCountry(onClickCity,city,country,countryCode,allWeather[`${city}-${country}`])
                    }) 
                }            
            </List>

        </div>
        
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
