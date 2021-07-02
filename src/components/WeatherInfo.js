const WeatherInfo = ({condition,wind,pressure}) => {
    return(
        <div>
            <h3>"{condition}"</h3>
            <h3>Wind Speed: {wind} km/h</h3>
            <h3>Pressure: {pressure} mb</h3>
        </div>
    )
}

export default WeatherInfo