
import React from 'react'
import {BrowserRouter as Router,
        Routes,
        Route } from 'react-router-dom'



import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'


const App = props => {
  return (
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage/>}> </Route>
                    <Route path="/main*" element={<MainPage/>}> </Route>
                    <Route path="/city" element={<CityPage/>}> </Route>
                    <Route path="*" element={<NotFoundPage/>}> </Route>
                </Routes>
            </Router>
  )
}

const prueba =()=>{
  return(
    
    <WelcomeScreen></WelcomeScreen>
  )
}

export default App