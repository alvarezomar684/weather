import { useState, useEffect } from 'react';
import Title from './components/Title';
import WeatherInfo from './components/WeatherInfo';
import WeatherImg from './components/WeatherImg';
import ChangedDegrees from './components/ChangedDegrees';
import './App.css';

function App() {

  const [ip, setIP] = useState (null)
  const [location, setLocation] = useState (null)
  const [data, setData] = useState (null)

  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [condition, setCondition] = useState("")
  const [wind, setWind] = useState(0)
  const [conditionImg, setConditionImg] = useState("")
  const [pressure, setPressure] = useState(0)
  const [tempC, setTempC] = useState(0)
  const [tempF, setTempF] = useState(0)

  //Consiguiendo IP del usuario
  useEffect(()=>{  
   
    ;(async()=>{
      const url =`https://api.ipify.org?format=json`    
      const responseIP = await fetch(url).then(res => res.json())
      setIP(responseIP)
    
    })()

  },[])

  useEffect(()=>{
    if(ip){
      // console.log(ip);//Todo el arreglo
      // console.log(ip.ip);//Todo el arreglo    
    }
  },[ip])




  //consiguiendo locazicacion del usuario Ciudad, Estado, Pais etc
  useEffect(()=>{  
   
    ;(async()=>{
          
      if(ip){
        const url = `http://ip-api.com/json/${ip.ip}`
        const responseLocation = await fetch(url).then(res => res.json())
        setLocation(responseLocation)
      }        
    
    })()

  },[ip])

  useEffect(()=>{
    if(location){
      // console.log(location);//Todo el arreglo    
    }
  },[location])



  //Usando datos conseguidos para obtener info del clima segun region del usuario
  useEffect(()=>{
    
    ;(async()=>{
          

      if(location){
        const url =`http://api.weatherapi.com/v1/current.json?key=85a58b84fe6f431bbc124436210207&q=${encodeURI(location.city)}&aqi=no`
        const response = await fetch(url).then(res => res.json())
        setData(response)
      }
    
    })()

  },[location])

  useEffect(()=>{
    if(data){
      setCity(data.location.name)
      setState(data.location.region)
      setCountry(data.location.country)
      setCondition(data.current.condition.text)
      setWind(data.current.wind_kph)
      setConditionImg(data.current.condition.icon)
      setPressure(data.current.pressure_mb)
      setTempC(data.current.temp_c)
      setTempF(data.current.temp_f)
    }
  },[data,city,state,country,condition,wind,conditionImg,pressure,tempC,tempF])

  


  return (
    <div className="App">
      <header className="App-header">
        <Title city={city} state={state} country={country} />
        <WeatherInfo condition={condition} wind={wind} pressure={pressure} />
        <WeatherImg conditionImg={conditionImg} tempC={tempC} condition={condition}/>
        <ChangedDegrees />
      </header>
      
    </div>
  );
}

export default App;
