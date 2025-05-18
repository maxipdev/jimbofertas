import { createContext, useContext, useEffect, useState } from "react"
import { fetchData } from "../fetchData"

// Verifica si el usuario tiene la sesion iniciada --> Mediante un hook
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [userState, setUserState] = useState(false)

    useEffect(()=> {
        fetchData({path: 'login'})
        .then(() => setUserState(true))
        .catch(() => console.error('Error al inicar sesion'))
    }, [])


    const sigIn = (data)=> {
        fetchData({path: 'login', method: 'POST', body: data})
        .then(()=> setUserState(true))
        .catch(err => console.error(err))
    }


    const sigOut = ()=> {
        fetchData({path: 'logout'})
        .then(()=> setUserState(false))
        .catch(err => console.error(err))
    }


    return (
        <AuthContext.Provider value={{userState, sigIn, sigOut}}>
            {children}
        </AuthContext.Provider>
    )
}


