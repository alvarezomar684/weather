const WeatherImg = ({conditionImg,tempC,condition}) => {
    return(
        <div>
            <img src={conditionImg} alt={condition} />
            <h3>{tempC} °C </h3>
        </div>
    )
}

export default WeatherImg