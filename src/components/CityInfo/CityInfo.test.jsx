import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo' //objeto a testear


test("CityInfo render", async () =>{
    //AAA
    //Arrange
    //Act
    //Assert

    const capital="CDMX" //con estos dos valores el test no fallara
    const pais="Mexico"

    //se empieza a preparar el render

    //Renderiza el componente y retorna una serie de funciones de utilidad
    //Usamos findAllByRole para consultar a nuestro componente
    const {findAllByRole} =render(<CityInfo city={capital} country={pais}></CityInfo>)//funcion de libreria
    
    //en findAllByRole buscaremos todos los componentes que sean heading H1 H2 H3....
    // el resultado va a ser un arreglo
    const cityAndCountryComponents=await findAllByRole("heading")//se espera un array

    //¿Cuando el test va a ser correcto?
    //
    //cuando el primer elemento (heading) se encuentre la cuidad CDMX
    //y cuando el segunde se encuentre en  el pais Mexico

    expect(cityAndCountryComponents[0]).toHaveTextContent(capital)//se espera una comparacion
    expect(cityAndCountryComponents[1]).toHaveTextContent(pais)//se espera una comparacion

    //si estas condiciones (expect) se cumplen con un OK
})