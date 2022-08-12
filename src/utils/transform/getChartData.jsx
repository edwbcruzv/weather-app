import moment from 'moment'
import 'moment/locale/es-mx'
import { toCelcius } from '../utils'

const getCharData=(response)=>{

    const data = response.data
    console.log(data)
    
    const daysAhead=[0,1,2,3,4,5]
    const days=daysAhead.map(d=>{
      return moment().add(d,'d')
    })

    const dataAux=days.map(day =>{

      const tempObjArray=data.list.filter(item =>{
        
        const dayOY=moment.unix(item.dt).dayOfYear()
        return dayOY === day.dayOfYear()
      })
      
      console.log(day.dayOfYear())
      console.log(tempObjArray)

      const temps = tempObjArray.map(item =>{
        return item.main.temp
      })
      
      
      // dayHour, min, max
      return ({
        dayHour:day.format('ddd'),
        min:toCelcius(Math.min(...temps)),
        max:toCelcius(Math.max(...temps)),
        hasTemps:(temps > 0 ? true:false)
      })
    })

    return dataAux

}


export default getCharData