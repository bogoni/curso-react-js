import React, { useContext, useState } from 'react'
import Menu from './components/Menu'
import './assets/scss/main.scss'
import UserContext from './context/UserContext'
import { ThemeProvider } from 'styled-components'
// eslint-disable-next-line
import { light, dark } from './Theme'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Departamentos from './pages/Departamentos'
import DetalheDepartamento from './pages/DetalheDepartamento'
import FormDepartamento from './pages/FormDepartamento'
import User from './pages/User'
import { Provider } from 'react-redux'
import store from './store/'

function App() {
  const [user, setUser] = useState('Bogoni')
  const { dtCriacao } = useContext(UserContext)
  return (
    <Provider store={store}>
      <ThemeProvider theme={dark}>
        <UserContext.Provider value = {{...{user, setUser}, dtCriacao}}>
          <BrowserRouter>
            <Menu/>
            <section>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home/>} />
                  <Route path='/departamentos'>
                    <Route index element={<Departamentos/>} />
                    <Route path='new' element={<FormDepartamento/>}/>
                    <Route path=':idDepartamento' element={<DetalheDepartamento/>}/>
                  </Route>
                  <Route path='/user' element={<User/>}/>
                </Route>
                <Route path='*' element={<h1>Not Found</h1>} />
              </Routes>
            </section>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
