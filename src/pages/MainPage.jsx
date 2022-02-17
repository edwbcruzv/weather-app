import React from 'react'
import {useNavigate} from 'react-router-dom'
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
    <div>
        <h2>Lista de ciudades</h2>
        <CityList cities={cities} onClickCity={onClickHandler} ></CityList>
    </div>
  )
}


export default MainPage