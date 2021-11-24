import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from "./components/Notification";
import Error from "./components/Error";
import personService from "./services/personService";

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ message, setMessage] = useState(null)
    const [ errorMessage, setErrorMessage ] = useState(null)
    const [ filter, setFilter ] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then((data) => setPersons(data))
            .catch(err => console.log(err))
    }, [])

    // Handlers
    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)
    const handleFilterChange = (event) => setFilter(event.target.value)

    // Add Name
    const addName = (event) => {
        event.preventDefault()

        const obj = {
            name: newName,
            number: newNumber,
        }

        const duplicatedPerson = persons.find(person => person.name === newName)

        if (duplicatedPerson) {

            if (duplicatedPerson.number !== newNumber) {

                if (window.confirm(`${ newName } is already added to phonebook, replace the old number with a new one?`)) {
                    personService
                        .update(duplicatedPerson.id, obj)
                        .then(updatedPerson => {
                            const data = persons.map(person => person.id === updatedPerson.id ? updatedPerson : person)
                            setPersons(data)
                            setNewName('')
                            setNewNumber('')
                            setMessage(`Updated ${newName}`)
                            setTimeout(() => {
                                setMessage(null)
                            }, 5000)
                        })
                        .catch(err => console.log(err))
                    return
                }
            }
            alert(`${ newName } is already added to phonebook`)
            return
        }

        personService
            .create(obj)
            .then(createdPerson => {
                setPersons([...persons, createdPerson])
                setNewName('')
                setNewNumber('')
                setMessage(`Added ${newName}`)
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
            })
            .catch(err => console.log(err))
    }

    const deletePerson = (id, name) => {
        if (window.confirm(`Delete ${name}`)) {
            personService
                .destroy(id)
                .then(() => {
                    const data = persons.filter((person) => person.id !== id)
                    setPersons(data)
                })
                .catch(err => {
                    console.log(err)
                    setErrorMessage(`Information of ${ name } has already been removed from server.`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                })
        }
    }

    // Filtering Persons
    const filteredPerson = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    const personsToShow = (filteredPerson.length) ? filteredPerson : persons

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={ message } />
            <Error error={ errorMessage } />
            <Filter handleChange={ handleFilterChange } value={ filter } />
            <h2>Add a new</h2>
            <PersonForm
                handleSubmit={ addName }
                handleNameChange={ handleNameChange }
                newName={ newName }
                handleNumberChange={ handleNumberChange }
                newNumber={ newNumber }
            />
            <h2>Numbers</h2>
            <Persons persons={ personsToShow } handleClick={ deletePerson } />
        </div>
    )
}

export default App