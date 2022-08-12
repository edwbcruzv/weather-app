import moment from 'moment'
import 'moment/locale/es-mx'
import { toCelcius } from '../utils'



const getForecastItemList=(response)=>{

    //intervales de cada 3 horas
    const interval = [4,8,12,16,20,24]
    const forecastItemListAux=response.data.list.filter((item,index)=>{
      return interval.includes(index)
    }).map(item=>{
      return({
        hour:moment.unix(item.dt).hour,
        weekDay:moment.unix(item.dt).format('dddd'),
        state:item.weather[0].main.toLowerCase(),
        temperature:toCelcius(item.main.temp)
        
      })
    })

    return forecastItemListAux
}

export default getForecastItemList