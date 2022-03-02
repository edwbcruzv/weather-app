import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppFrame from './AppFrame'

export default{
    title:"AppFrame",
    component:AppFrame,
}

export const AppFrameExample = () => ( 
    <Router>
        <AppFrame>
            Lorem ipsum, dolor sit 
            amet consectetur adipisicing elit. Aliquid voluptates 
            aspernatur cum, quasi id quisquam accusamus sequi?
             Assumenda, eius temporibus.
        </AppFrame>
    </Router>
)