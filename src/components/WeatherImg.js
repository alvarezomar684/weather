const WeatherImg = ({conditionImg,temp,condition}) => {
    return(
        <div>
            <img src={conditionImg} alt={condition} />
            <h3>{temp}</h3>
        </div>
    )
}

export default WeatherImg