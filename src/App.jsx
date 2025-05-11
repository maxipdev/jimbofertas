import { AdminPage } from './pages/adminPage'
import './App.css'
import './header.css'
import {Route, Routes} from "react-router-dom"
import { Buscador } from './components/buscador'
import { Header } from './components/header'
import { Home } from './pages/home'


function App() {
  return (
    <>
      <Header></Header>

      <Buscador></Buscador>

      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<Home />} />
        <Route path="/b" element={<Home />} />
        <Route path="/c" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
