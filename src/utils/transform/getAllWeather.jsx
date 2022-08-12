import convert from 'convert-units'


const getAllWeather =(response,city,country)=>{


    const {data}=response
    const temperature=Number(convert(data.main.temp).from("K").to("C").toFixed(0))
    const state =data.weather[0].main.toLowerCase()
    // const state = "snow"
    const humidity=data.main.humidity
    const wind=data.wind.speed

    const propName=`${city}-${country}` // Ej: "CDMX-Mexico"
    const propValue={temperature,state,humidity,wind} // Ej: {temperature:20,state:"sunny"}

    return ({[propName]:propValue})
}

export default getAllWeather