import React from 'react'
import { Link } from 'react-router-dom'


const NotFoundPage = () => {
  return (
    <div>NotFoundPage
        <div>
            <Link to="/main">Volver a main</Link> {/*Tiene que ir dentro de Router */}
        </div>
    </div>
  )
}


export default NotFoundPage