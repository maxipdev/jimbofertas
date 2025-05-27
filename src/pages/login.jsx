import { useAuth } from "../hooks/useAuth"
import '../styles/login.css'

export function Login () {
  const {sigIn} = useAuth()

    const handleSubmit = (event)=> {
        event.preventDefault()
        const formData = new FormData(event.target)

        // const email = formData.get('email')
        const password = formData.get('password')

        const data = {
            email: "admin@jimbofertas.com",
            password: password
        }
        console.log(data)

        //Inicia sesion
        sigIn(data)
    }   

    return (
        <section className="login-container">
            <h1>Panel de administración</h1>
            <form autoComplete="off" onSubmit={(event)=> handleSubmit(event)}>
                {/* <input name="email" type="email" placeholder="Ingresa tu email" required/> */}
                <input name="password" type="password" placeholder="Ingresa tu contraseña" required/>
                <button className="boton">Iniciar sesion</button>
            </form>
        </section>
    )
}