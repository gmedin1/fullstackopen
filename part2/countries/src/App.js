import React, { useState, useEffect } from "react"
import Country from './components/Country'
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

  // Handlers
  const handleChange = (event) => setValueCountry(event.target.value)

  // Filters & Functions
  const query = countries.filter((country) => country.name.common.toLowerCase().includes(valueCountry.toLowerCase()))
  
  const countriesToShow = (query) => {
    if (query.length === 1) {
      return <Country country={ query[0] } isDetailed={ true } />
    }

    if (query.length <= 10) {
      return <Countries countries={ query } />
    }

    return 'Too many matches, specify another filter'

  }

  return (
    <div>
      <div>
        find countries <input onChange={ handleChange } value={ valueCountry } />
      </div>
      <div>
        { countriesToShow(query) }
      </div>
      <div>

      </div>
    </div>
  )
}

export default App

