import { useRef } from "react"
import '../buscador.css'

export const Buscador = ()=> {
const buscardorRef = useRef()


const handleClick = (e) => {
    e.preventDefault()
}



return (
    <section className='buscador-container'>
        <form ref={buscardorRef}>
            <input type="text" placeholder='¿Qué estas buscando?'/>
            <button onClick={handleClick} className="boton">Buscar</button>
        </form>
    </section>
)
}