import React from 'react'

function PersonForm({ handleSubmit, handleNameChange, newName, handleNumberChange, newNumber }) {
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                Name: <input onChange={ handleNameChange } value={ newName } />
            </div>
            <br />
            <div>
                Number: <input onChange={ handleNumberChange } value={ newNumber } />
            </div>
            <br />
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}

export default PersonForm
