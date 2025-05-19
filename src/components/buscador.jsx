import { useRef } from "react"
import '../styles/buscador.css'

export const Buscador = ()=> {
const buscardorRef = useRef()


const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const busqueda = formData.get("search")

    console.log(busqueda)
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