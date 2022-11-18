import Menu from './components/Menu';
import './assets/scss/main.scss';
import { ThemeProvider } from 'styled-components';
 // eslint-disable-next-line
import { light, dark } from './Theme'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Departamentos from './pages/Departamentos'
import DetalheDepartamento from './pages/DetalheDepartamento';
import FormDepartamento from './pages/FormDepartamento';


function App() {
   return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
      <Menu/>
      <section>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>} />
            <Route path='/departamentos'>
              <Route index element={<Departamentos/>} />
              <Route path='new' element={<FormDepartamento/>}/>
              <Route path=':idDepartamento' element={<DetalheDepartamento/>}/>'
            </Route>
          </Route>
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </section>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
