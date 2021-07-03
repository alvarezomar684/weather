const Title = ({city,state,country}) => {
    return(
        <div>
            <h1>WEATHER APP</h1>
            <h2><span>{city}</span> {state}  <span>{country}</span></h2>
        </div>
    )
}

export default Title

