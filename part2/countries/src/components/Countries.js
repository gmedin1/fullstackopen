import React from 'react'
import Country from './Country'

function Countries({ countries }) {
    return(
        <>
            { countries.map((country) => {
                return(
                    <Country key={ country.name.common } country={ country } isDetailed={ false } /> 
                )
            }) }
        </>
    )
}

export default Countries
