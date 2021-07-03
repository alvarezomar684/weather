const WeatherInfo = ({condition,wind,pressure}) => {
    return(
        <div>
            <h3>"{condition}"</h3>
            <h3><span>Wind Speed:</span> {wind} km/h</h3>
            <h3><span>Pressure:</span> {pressure} mb</h3>
        </div>
    )
}

export default WeatherInfo