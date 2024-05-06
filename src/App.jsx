import { useState } from 'react'
import Testresult from '../blogs/test/testresult'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>afdadad</h1> */}

    <Testresult/>
    </>
  )
}

export default App
