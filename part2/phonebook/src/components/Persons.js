import React from 'react'

function Persons({ persons, handleClick }) {
    return (
        <div>
            { persons.map(person => {
                return(
                    <p key={ person.id }>
                        { person.name } { person.number }
                        {' '}
                        <button onClick={() => handleClick(person.id, person.name) }>delete</button>
                    </p>
                )
            }) }
        </div>
    )
}

export default Persons
