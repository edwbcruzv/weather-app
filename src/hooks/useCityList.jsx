import {useState,useEffect} from 'react'
import axios from 'axios'
import { getForecastURL } from '../utils/urls'
import getAllWeather from '../utils/transform/getAllWeather'

const useCityList = (cities) =>{
    const [error,setError]=useState(null) //error en null

    const [allWeather, setAllWeather] = useState({}) //objeto vacio
    /* estructura esperada en allWeather, un objeto
        {
            [ciudad]:{datos}
            [ciudad]:{datos}
            [ciudad]:{datos}
        }
        */


        // Este useEffect se ejecuta despues del renderizado
    useEffect(() => {
        

        const setWeather= async (city,country,countryCode)=>{
            //https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=9cf748c04e6ae0f475486f0f2fcc3e53

            
            const url= getForecastURL({countryCode,city})

            try {
                // leer documentacion de axios
                const response = await axios.get(url)

                const allWeatherAux=getAllWeather(response,city,country)
                setAllWeather(allWeather => ({...allWeather,...allWeatherAux}))
                console.log("allWeatherAux:",allWeatherAux)

            } catch (error){
                // En caso de haber un error en la solicitud a la api 
                setError("Error del servidor:"+error.code)
            }
            
        }
    
        cities.forEach(({city,country,countryCode}) => {
            //Por cada Objeto (ciudad) se hara una peticion a la API
            setWeather(city,country,countryCode)
        });

    }, [])// si cambia la lista de ciudades se ejecutara el efecto

    return {allWeather,error,setError}

}

export default useCityList