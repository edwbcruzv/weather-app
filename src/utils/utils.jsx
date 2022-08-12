import convert from 'convert-units'


export const toCelcius = (temp)=>{
    return Number(convert(temp).from("K").to("C").toFixed(0))
  }