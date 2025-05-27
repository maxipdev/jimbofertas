import { createContext, useContext, useEffect, useRef, useState } from "react"
import { fetchData } from "../fetchData"
import { toast } from 'sonner'

// Verifica si el usuario tiene la sesion iniciada --> Mediante un hook
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [userState, setUserState] = useState(false)
    const tokenRef = useRef(null)

    useEffect(()=> {
        const token = getTokenLocalStorage()
        if (token) {
            tokenRef.current = token
            fetchData({path: 'login', token})
            .then(() => setUserState(true))
            .catch((err) => {
                console.log(err)
                deleteTokenLocalStorage()
            })
        }
    }, [])

    const saveTokenLocalStorage = (token)=> {
        localStorage.setItem('token', JSON.stringify(token))
    }

    const getTokenLocalStorage = ()=> {
        const datos = localStorage.getItem('token')
        return JSON.parse(datos)
    }

    const deleteTokenLocalStorage = () => {
        console.log("Borrando token")
        localStorage.removeItem('token')
    }

    const sigIn = (data)=> {
        console.log("hola")
        const promesa = fetchData({path: 'login', method: 'POST', body: data})

        toast.promise(promesa, {
            loading: 'Cargando....',
            success: (token) => {
                saveTokenLocalStorage(token)
                tokenRef.current = token
                setUserState(true)
                return {
                    title: 'Sesión iniciada correctamente',
                    description: '¡Bienvenido!',
                }
            },
            error: {
                title: 'Error al iniciar sesión',
                description: 'Usuario o contraseña incorrectos',
            }
        })
    }


    const sigOut = ()=> {
        deleteTokenLocalStorage()
        setUserState(false)
    }


    return (
        <AuthContext.Provider value={{userState, tokenRef, sigIn, sigOut}}>
            {children}
        </AuthContext.Provider>
    )
}


