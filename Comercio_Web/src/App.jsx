import { useState } from 'react'
import './App.css'
import { NavBar } from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (    
    <ChakraProvider>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer title='Tienda de item list container' />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer title='Tienda' />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
      
  )
}

export default App
