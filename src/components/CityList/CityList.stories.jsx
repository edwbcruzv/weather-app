import React from 'react'
import CityList from "./CityList"
import {action} from '@storybook/addon-actions'

export default{
    title: "Citylist",
    component: CityList
}
const cities = [
    {city : "Buenos Aires",country:"Argentina"},
    {city : "Bogota",country:"Colombia"},
    {city : "Matrid",country:"España"},
    {city : "Ciudad De Mexico",country:"Mexico"}
]

export const CityListExample = () =>{
    return <CityList cities={cities} onClickCity={action("un click")}></CityList>
}