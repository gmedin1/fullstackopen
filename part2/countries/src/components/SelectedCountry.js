import React, { useState } from 'react'

function SelectedCountry({ country }) {
    const [ toggle, setToggle ] = useState(false)
    return (
        <div>
            { country } { toggle }
        </div>
    )
}

export default SelectedCountry