import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')

  // Effect Hook
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  // New State
  const [ filter, setFilter ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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
      id: persons.length + 1
    }

    const isDuplicated = persons.find(person => person.name === newName)

    if (isDuplicated) {
      alert(`${ newName } is already added to phonebook`)
    } else {
      setPersons([...persons, obj])
    }

    setNewName('')
    setNewNumber('')
  }

  // Filtering
  const filteredPerson = persons.filter((person) => person.name.toLowerCase() === filter.toLowerCase() || person.name.toLowerCase().startsWith(filter.toLowerCase()))
  const personsToShow = (filteredPerson.length) ? filteredPerson : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={ handleFilterChange } value={ filter } />
      <h2>add a new</h2>
      <PersonForm handleSubmit={ addName } handleNameChange={ handleNameChange } newName={ newName } handleNumberChange={ handleNumberChange } newNumber={ newNumber } />
      <h2>Numbers</h2>
      <Persons persons={ personsToShow } />
    </div>
  )
}

export default App