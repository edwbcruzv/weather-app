import React from 'react'
import {render} from "@testing-library/react"
import CityList from "../CityList/CityList"

test("CityList renders", async() => {
    //AAA 
    const cities = [
        {city : "Buenos Aires",country:"Argentina"},
        {city : "Bogota",country:"Colombia"},
        {city : "Matrid",country:"España"},
        {city : "Ciudad De Mexico",country:"Mexico"}
    ]

    const {findAllByRole} = render(<CityList cities={cities}></CityList>)
    const items =await findAllByRole("listitem")

    expect(items).toHaveLength(4)

})
