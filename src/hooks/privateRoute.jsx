import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./useAuth"

export const PrivateRoute = ()=> {
    // Tengo que mirar si el usuaio tiene una sesion iniciada
    const {userState} = useAuth()

    return userState ? <Outlet /> : <Navigate to="/login" /> // si el usuario no tiene sesion loo lleva al login si no lo deja pasar
}