import { Paper } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import AppFrame from '../components/AppFrame/AppFrame'
import CityList from '../components/CityList'


const MainPage = props => {
  const navigate =useNavigate()
  const onClickHandler =()=>{
    //navigate.push: nos permite alterar la URL por programacion
    navigate("/city")
  }

  const cities = [
    {city : "Buenos Aires",country:"Argentina"},
    {city : "Bogota",country:"Colombia"},
    {city : "Matrid",country:"España"},
    {city : "Ciudad De Mexico",country:"Mexico"}
]

  return (
    <AppFrame>
      <Paper elevation={10}>
        <CityList cities={cities} onClickCity={onClickHandler} ></CityList> {/*children */}
        </Paper>
    </AppFrame>
  )
}


export default MainPage