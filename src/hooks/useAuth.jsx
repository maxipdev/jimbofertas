import { createContext, useContext, useEffect, useRef, useState } from "react"
import { fetchData } from "../fetchData"

// Verifica si el usuario tiene la sesion iniciada --> Mediante un hook
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [userState, setUserState] = useState(false)
    const tokenRef = useRef(null)

    useEffect(()=> {
        // fetchData({path: 'login'})
        // .then(() => setUserState(true))
        // .catch(() => console.error('Error al inicar sesion'))

        const token = getTokenLocalStorage()
        tokenRef.current = token

        if (token) {
            setUserState(true)
        }
    }, [])

    const saveTokenLocalStorage = (token)=> {
        localStorage.setItem('token', JSON.stringify(token))
    }

    const getTokenLocalStorage = ()=> {
        const datos = localStorage.getItem('token')
        return JSON.parse(datos)
    }

    const sigIn = (data)=> {
        fetchData({path: 'login', method: 'POST', body: data})
        .then((token) => {
            saveTokenLocalStorage(token)
            console.log(token)
            setUserState(true)
        })
        .catch(err => console.error(err))
    }


    const sigOut = ()=> {
        fetchData({path: 'logout'})
        .then(()=> setUserState(false))
        .catch(err => console.error(err))
    }


    return (
        <AuthContext.Provider value={{userState, tokenRef, sigIn, sigOut}}>
            {children}
        </AuthContext.Provider>
    )
}


