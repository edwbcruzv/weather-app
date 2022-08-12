import React from 'react'
import CityInfo from './CityInfo'

export default {
    title: "CityInfo",
    component: CityInfo,
}

export const CityExample = (args) => (
    <CityInfo {...args}></CityInfo>
)

CityExample.args={city:"Capital del pais", country:"Pais"}