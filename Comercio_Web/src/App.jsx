import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <ItemListContainer title="Tienda"/>
    </div>
   
  )
}

export default App
