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
  const [isLoading, setIsLoading] = useState(false)

  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const [condition, setCondition] = useState("")
  const [wind, setWind] = useState(0)
  const [conditionImg, setConditionImg] = useState("")
  const [pressure, setPressure] = useState(0)
  const [tempC, setTempC] = useState(0)
  const [tempF, setTempF] = useState(0)

  const [changedTemp, setChangedTemp] = useState("")

  ///////////////////////////////////////////Consiguiendo IP del usuario//////////////////////////////////////////////////////
  useEffect(()=>{  
   
    ;(async()=>{
      const url =`https://api.ipify.org?format=json`    
      const responseIP = await fetch(url).then(res => res.json())
      setIP(responseIP)
    
    })()

  },[])

  ////////////////////////////////////consiguiendo locazicacion del usuario Ciudad, Estado, Pais etc////////////////////////////////
  useEffect(()=>{  
   
    ;(async()=>{
          
      if(ip){
        
        const url = `https://ipapi.co/${ip.ip}/json/`
        const responseLocation = await fetch(url).then(res => res.json())
        setLocation(responseLocation)
      }        
    
    })()

  },[ip])

  ///////////////////////////////////////////consiguiendo info clima segun la region en la que se encuentre el usuario////////////////////////
  useEffect(()=>{
    
    ;(async()=>{
          

      if(location){        
        const url = `https://api.weatherapi.com/v1/current.json?key=85a58b84fe6f431bbc124436210207&q=${encodeURI(location.city)}&aqi=no`
        const response = await fetch(url).then(res => res.json())
        setData(response)
        setIsLoading(false)
      }
      
    
    })()
    setIsLoading(true)

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
      setChangedTemp(`${data.current.temp_c}°C`)
    }
  },[data,city,state,country,condition,wind,conditionImg,pressure,tempC,tempF])

  return (
    <div className="App">
      {isLoading 
          ? <p className="loading">Cargando Informacion</p>
          : data && <header className="App-header">  
                      <Title city={city} state={state} country={country} />
                      <div className="weather">          
                        <WeatherImg conditionImg={conditionImg} temp={changedTemp} condition={condition}/>
                        <WeatherInfo condition={condition} wind={wind} pressure={pressure}/>
                      </div>        
                      <ChangedDegrees tempC={tempC} tempF={tempF} changedTemp={changedTemp} setChangedTemp={setChangedTemp}/>
                    </header> }      
    </div>
  );
}

export default App;
