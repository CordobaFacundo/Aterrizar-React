import React from 'react'
import { Navbar, Search } from './components'
import { ItemDetailContainer, ItemListContainer } from './containers'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './auth/components/LoginPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
        <Search />
          <Routes>
            <Route path='/*' element={ <ItemListContainer /> } />
            <Route path='/login' element={ <LoginPage /> } />
            <Route path='/detail/:id' element={ <ItemDetailContainer /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
