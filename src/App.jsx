
import React from 'react'
import {BrowserRouter as Router,
        Routes,
        Route } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=9cf748c04e6ae0f475486f0f2fcc3e53
// https://api.openweathermap.org/data/2.5/weather?q={Ciudad de Mexico}&appid=9cf748c04e6ae0f475486f0f2fcc3e53
// 


const App = props => {
  return (
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage/>}> </Route>
                    <Route path="/main" element={<MainPage/>}> </Route>
                    <Route path="/city" element={<CityPage/>}> </Route>
                    <Route path="*" element={<NotFoundPage/>}> </Route>
                </Routes>
            </Router>
  )
}


export default App