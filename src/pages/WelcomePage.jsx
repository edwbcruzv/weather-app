import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div>
      Welcome
        <div>
            <Link to="/main">Ir a main</Link> {/*Tiene que ir dentro de Router */}
        </div>
    </div>
  )
}


export default WelcomePage