import React from 'react'
import Country from './Country'

function Countries({ countries, handleClick }) {

    if (countries.length === 1) {
        return <Country country={countries[0]} />
    }

    if (countries.length <= 10) {
        return(
            <div>
                { countries.map((country) => {
                    return(
                        <p key={country.name.common}>
                            { country.name.common }
                            {' '}
                            <button onClick={ () => handleClick(country) }>Show</button>
                        </p>
                    )
                }) }
            </div>
        )
    }

    return 'Too many matches, specify another filter'
}

export default Countries
