import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'
import Form from './Form'
import NavBar from './NavBar'
import SlideShow from './SlideShow'


function App() {
  const [count, setCount] = useState(0)

  let name = "blabla";
  let hobbies = ["Zeilen", "JavaScript programmeren", "Fietsen"]
  let hobbies2 = ["Java programmeren", "puzzelen", "JavaScript programmeren", "Fitness"]
  return (
    <>
      <NavBar></NavBar>
      <h1>Welcome!</h1>
      <p>Het is vrijdag.</p>
      <SlideShow></SlideShow>
      <Form></Form>
      <List name="Edo" job="security officer" hobbies={hobbies}></List>  
      <hr></hr>
      <List name={name} job="software dev" hobbies={hobbies2}></List>
    </>
  )
}

export default App
