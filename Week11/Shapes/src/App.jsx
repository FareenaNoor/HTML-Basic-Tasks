import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="circle">circle</div>
    <div className="rect">rectangle</div>
    <div className="square">square</div>
    <div className="triangle">triangle</div>
    </>
  );
}

export default App
