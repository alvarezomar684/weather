const ChangedDegrees = ({tempF,tempC,changedTemp,setChangedTemp}) => {
    return(
        // <button onClick={changed}
        
        // >DEGREES °F/°C</button>

        <button onClick = { () => {
                
            if(changedTemp===`${tempC}°C`){
                setChangedTemp(`${tempF}°F`)
              }else{
                setChangedTemp(`${tempC}°C`)
              }
            

        }}
        
        >DEGREES °F/°C</button>
    )
}

export default ChangedDegrees