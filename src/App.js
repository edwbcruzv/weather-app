import './App.css';
//import ForecastItem from './components/ForecastItem';
//import Weather from './components/Weather'
//import CityInfo from './components/CityInfo'
//import CityList from "./components/CityList"
//import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast/Forecast';

const forecastItemList=[
  {weekDay:"Lunes",hour:10,state:"cloud",temperature:30},
  {weekDay:"Martes",hour:20,state:"cloudy",temperature:40},
  {weekDay:"Miercoles",hour:30,state:"fog",temperature:50},
  {weekDay:"Jueves",hour:40,state:"sunny",temperature:60},
  {weekDay:"Viernes",hour:50,state:"rain",temperature:70},
  {weekDay:"Sabado",hour:60,state:"sunny",temperature:80},
]


function App() {
  
  return (
    
    <Forecast forecastItemList={forecastItemList}/>

  );
}

export default App;
