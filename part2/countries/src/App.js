import React, { useState, useEffect } from "react"
import Countries from "./components/Countries"
import axios from 'axios'

function App() {

  // Hooks
  const [ valueCountry, setValueCountry ] = useState('')
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data))
  }, [])

  // Handlers ---> Binding The Input with State
  const handleChange = (event) => setValueCountry(event.target.value)

  const handleClick = (country) => setValueCountry(country.name.common)

  // Filters & Functions ---> query = interacts with the input value to retrieve the list of countries that match with the search criteria.
  const query = countries.filter((country) => country.name.common.toLowerCase().includes(valueCountry.toLowerCase()))

  return (
    <div>
      <div>
        find countries <input onChange={ handleChange } value={ valueCountry } />
      </div>
      <div>
        <Countries countries={ query } handleClick={ handleClick } />
      </div>
    </div>
  )
}

export default App

