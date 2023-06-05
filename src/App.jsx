import React from 'react'
import { Navbar } from './components'
import { ItemDetailContainer, ItemListContainer } from './containers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/*' element={ <ItemListContainer /> } />
          <Route path='/detail/:id' element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
