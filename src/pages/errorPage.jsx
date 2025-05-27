import { useNavigate } from 'react-router-dom'
import '../styles/errorPage.css'

export function ErrorPage() {
    const navigate = useNavigate()
    setTimeout(()=> {
        navigate(`/`)
    }, 1800)
    return (
        <div className='contenedor-error-page'>
            <h1>Lo sentimos no hay ningun produduto para mostrar</h1>
            <h2>Serás redirigido al inicio</h2>
        </div>
    )
}