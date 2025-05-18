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


function App() {
  return (
    <>
      <Header></Header>

      <Buscador></Buscador>

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

    </>
  )
}

export default App
