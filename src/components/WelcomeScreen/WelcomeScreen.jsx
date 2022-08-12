import React, {useRef, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'


/**
 * El componente es un fondo para el sitio web de bienvenida con ayuda de las librerias:
 * vantajs y three, ver documentacion.
 * 
 * lo que se encuentre dentro de las etiquetas se recibe en props.children
 * <WelcomeScreen>aqui van componentes que se deseen</WelcomeScreen>
 * @param {children} param0 
 * @returns 
 */
const WelcomeScreen = ({children}) => {
  
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)


  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(Clouds({
        el: myRef.current,
        THREE: THREE // linea distinta a la doc, se agrega para usar este tipo de efectos
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  
  return (
    <div className="full" ref={myRef}>
        {children}
    </div>
  )
}

WelcomeScreen.propTypes = {
    children:PropTypes.node
}

export default WelcomeScreen