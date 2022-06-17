import React from 'react'
import CityList from "./CityList"
import {action} from '@storybook/addon-actions'

export default{
    title: "Citylist",
    component: CityList
}
const cities = [
    {city : "Buenos Aires",country:"Argentina",countryCode:"AR"},
    {city : "Bogota",country:"Colombia",countryCode:"CO"},
    {city : "Matrid",country:"España",countryCode:"ESP"},
    {city : "Ciudad De Mexico",country:"Mexico",countryCode:"MX"}
]

export const CityListExample = () =>{
    return <CityList cities={cities} onClickCity={action("un click")}></CityList>
}