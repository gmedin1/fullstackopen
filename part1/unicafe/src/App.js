import React, { useState } from 'react'

const Title = ({ text }) => {
  return <h1>{ text }</h1>
}

const Button = ({ handleClick, text }) => {
  return <button onClick={ handleClick }>{ text }</button>
}

const StatisticLine = ({ text, value }) => {
  return(
    <tr>
      <th>{ text }</th>
      <td>{ value }</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
    return(
      <table>
        <tbody>
          <StatisticLine text="good" value={ good } />
          <StatisticLine text="neutral" value={ neutral } />
          <StatisticLine text="bad" value={ bad } />
          <StatisticLine text="all" value={ good + neutral + bad } />
          <StatisticLine text="average" value={ (good - bad) / (good + neutral + bad) } />
          <StatisticLine text="positive" value={ ((good / (good + neutral + bad)) * 100) + "%" } />
        </tbody>
      </table>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  const feedback = (good + neutral + bad) > 0 ? <Statistics good={ good } neutral={ neutral } bad={ bad } /> : 'No feedback given';

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={ handleGood } text="good" />
      <Button handleClick={ handleNeutral } text="neutral" />
      <Button handleClick={ handleBad } text="bad" />
      <Title text="statistics" />
      { feedback }
    </div>
  )
}

export default App