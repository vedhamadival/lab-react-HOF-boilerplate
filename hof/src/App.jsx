// import { useState } from 'react'
import './App.css'
import HigherOrderComponent from './Components/HigherOrderComponent'
import DesignerList from './Components/DesignerList'
import LetterJ from './Components/LetterJ'
import AgeFilter from './Components/AgeFilter'
import TotalYears from './Components/TotalYears'

function App() {

  return (
    <>
    <HigherOrderComponent/>
    <DesignerList/>
    <LetterJ/>
    <AgeFilter/>
    <TotalYears/>
    </>
  )
}

export default App
