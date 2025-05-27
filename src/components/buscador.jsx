import { useRef } from "react"
import '../styles/buscador.css'
import { useNavigate } from "react-router-dom"

export const Buscador = ()=> {
const buscardorRef = useRef()
const navigate = useNavigate()


const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const busqueda = formData.get("search")

    navigate(`/?product=${busqueda}`)
    
}



return (
    <section className='buscador-container'>
        <form ref={buscardorRef} onSubmit={e => handleSubmit(e)}>
            <input type="text" name="search" placeholder='¿Qué estas buscando?'/>
            <button className="boton">Buscar</button>
        </form>
    </section>
)
}