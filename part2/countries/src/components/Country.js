import React from 'react'

function Country({ country, handleClick, isDetailed }) {

    if (isDetailed) {
        return (
            <div>
                <h1>{ country.name.common }</h1>
                <div>
                    <div>capital { country.capital[0] }</div>
                    <div>population { country.population }</div>
                </div>
                <div>
                    <h2>languages</h2>
                    <ul>
                    { Object.entries(country.languages).map((language) => <li key={ language[0] }>{ language[1] }</li>) }
                    </ul>
                </div>
                <div>
                    <img src={ country.flags.png } alt={ country.flag } />
                </div>
            </div>
        )
    }

    return(
        <p>
            { country.name.common } <button onClick={ handleClick }>{ isDetailed ? 'hide' : 'show' }</button>
        </p>
    )
}

export default Country
