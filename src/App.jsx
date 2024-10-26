import { useState } from 'react'
import Box from './components/Box'
import './App.css'
import Heading from './components/Heading'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
     <Heading/>
       <Box />
    
    </>
  )
}

export default App
