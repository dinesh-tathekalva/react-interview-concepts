import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AccordianData from './data/AccordiansSectionsData.json'
// import Accordian from './components/Accordian'
import Accordian1 from './components/Accordian1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Accordian sectionsData={AccordianData}/> */}
        <Accordian1 sectionsData={AccordianData}/>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
    </>
  )
}

export default App
