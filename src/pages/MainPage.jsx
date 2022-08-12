import { Paper } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import AppFrame from '../components/AppFrame/AppFrame'
import CityList from '../components/CityList'
import { getCities } from '../utils/serviceCities'

const MainPage = props => {
  const navigate =useNavigate()
  const onClickHandler = (city,countryCode) =>{
    //navigate: nos permite alterar la URL por programacion
    console.log(city,countryCode)
    navigate(`/city/${countryCode}/${city}`)
  }

  return (
    <AppFrame>
      <Paper elevation={10}>
        <CityList cities={getCities()} onClickCity={onClickHandler} ></CityList> {/*children */}
        </Paper>
    </AppFrame>
  )
}


export default MainPage