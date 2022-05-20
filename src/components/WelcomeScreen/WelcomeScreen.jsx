import React, {useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({children}) => {
    const myRefDiv=useRef(null) // valor inicial

    const [vanta,setVanta]=useState(0) //vanta se inicializa

    //primera renderizacion "myRefCurrent" es igual a "null"
    console.log("myRefDiv.current",myRefDiv.current)

    useEffect(()=>{
        console.log("myRefDiv.current(useEffect)",myRefDiv.current)
        if (!vanta){
          setVanta(1)
          //activa los efectos de nube
          Clouds({
            THREE,
            el:myRefDiv.current
          })
          console.log("establesco vanta diferente a 0")
        }
        //Al salir de la pantalla debemos de detener el efecto
        return() => {
          // Aqui se destruiran los recursos creados por vanta
          if(vanta){
            vanta.destroy()
            console.log("libero recursos")
          }
        }
    },[vanta])
  return (
    <div className="full" ref={myRefDiv}>
        {children}
    </div>
  )
}

WelcomeScreen.propTypes = {
    children:PropTypes.node
}

export default WelcomeScreen