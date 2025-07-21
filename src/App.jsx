import { AdminPage } from './pages/adminPage'
import './App.css'
import {Route, Routes} from "react-router-dom"
import { Buscador } from './components/buscador'
import { Header } from './components/header'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { DinamicPage } from './pages/dinamicPage'
import { PrivateRoute } from './hooks/privateRoute'
import { RedirectToAdminPage } from './hooks/redirectToAdminPage'
import { Toaster } from 'sonner'
import './styles/footer.css'


function App() {
  return (
    <>
      <Header></Header>

      <Buscador></Buscador>

      <Toaster position="top-right" richColors />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<DinamicPage />} />

          {/*Private routes*/}
          <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<AdminPage />} />
          </Route>

          {/*TE lleva a la ruta privada una vez inicida la sesion*/}
          <Route element={<RedirectToAdminPage />}>
              <Route path="/login" element={<Login />} />
          </Route>

          {/*No se encontro la ruta*/}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>




      <footer>
        <h1>Contacto:</h1>
        <div className='contacto'>whatsapp: 1122233344</div>
        <div className='publicidad'>
          <span>@Todos los derechos reservados</span>
          <span>Web site created by Maximo Penacino</span>
        </div>
      </footer>

    </>
  )
}

export default App
