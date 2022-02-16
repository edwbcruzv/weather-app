import React from 'react'
import "typeface-roboto"//imperseptible
import CityInfo from './CityInfo'

export default {
    title: "CityInfo",
    component: CityInfo
}

export const CityExample = (args) => (
    <CityInfo {...args}></CityInfo>
)

CityExample.args={city:"Mexico", country:"CDMX"}