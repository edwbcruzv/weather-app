import {useState,useEffect,useDebugValue} from 'react'
import axios from 'axios'
import 'moment/locale/es-mx'
import { getWeatherUrl } from '../utils/urls'
import getCharData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'

const useCityPage = (params) =>{

    // la peticion que se necesita para obtener la grafica
  // https://api.openweathermap.org/data/2.5/forecast?q=tijuana,MX&appid=9cf748c04e6ae0f475486f0f2fcc3e53

  const [data, setData] = useState(null)
  const [forecastItemList, setForecastItemList] = useState(null)

//no usobreusar mucho este hook
  useDebugValue(`useCityPage data:${data}`) 

  useEffect(() => {
    
     const getForecast = async () => {
         
          const url = getWeatherUrl(params)

          try {
            const response = await axios.get(url)
            
            const dataAux=getCharData(response)
            setData(dataAux)
            
            const forecastItemListAux=getForecastItemList(response)
            setForecastItemList(forecastItemListAux)

          } catch (error) {
            console.log(error)
          }
      }

      getForecast()

  }, [])

  return {data,forecastItemList}
}

export default useCityPage