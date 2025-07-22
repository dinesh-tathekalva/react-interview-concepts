import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AccordianData from './data/AccordiansSectionsData.json'
// import Accordian from './components/Accordian'
import Accordian1 from './components/Accordian1'
import ContactForm from './components/ContactForm'
import ContentTabs from './components/ContentTabs'
import ContentTabsData from './data/ContentTabsData.json'
import ProgressBar from './components/ProgressBar'


const styles = {
  marginBottom: "2em"
}
function App() {
  const [count, setCount] = useState(0)
  const[bars, setBars]=useState(0);
  return (
    <>
      <div>
        {/* <Accordian sectionsData={AccordianData}/> */}
        <div style={styles}>
          ACCORDIAN
          <Accordian1 sectionsData={AccordianData} />
        </div>
        <div style={styles}>
          <ContactForm />
        </div>
        <div sty={styles}>
          TABS
          <ContentTabs contents={ContentTabsData} />
        </div>
        <div sty={styles}>
          Progress Bar
          <div className='wrapper' >
            <button onClick={() => setBars(bars + 1)}>Add</button>
            <div className='bars'>

              {
                [...Array(bars).keys()].map(index => (
                  <ProgressBar />
                ))

              }
            </div>
          </div>
        </div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

    </>
  )
}

export default App
