import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Country({ country }) {

    const [ weather, setWeather ] = useState({})

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        const capital = country.capital[0]
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
            .then(res => setWeather(res.data))
    }, [country])

    return (
        <div>
            <h1>{ country.name.common }</h1>
            <div>
                <div>Capital: { country.capital[0] }</div>
                <div>Population: { country.population }</div>
            </div>
            <div>
                <h2>Languages</h2>
                <ul>
                { Object.entries(country.languages).map((language) => <li key={ language[0] }>{ language[1] }</li>) }
                </ul>
            </div>
            <div>
                <img src={ country.flags.png } alt={ country.flag } width={ '15%' } />
            </div>
            {
                typeof weather.current === 'undefined' ?
                    '' :
                    <div>
                        <h2>Weather in { country.capital[0] }</h2>
                        <div>
                            <strong>Temperature: </strong><span>{ weather.current.temperature } Celcius</span>
                        </div>
                        <br />
                        <img alt="" src={ weather.current.weather_icons[0] } />
                        <div>
                            <strong>Wind: </strong><span>{ weather.current.wind_speed } mph direction { weather.current.wind_dir }</span>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Country
