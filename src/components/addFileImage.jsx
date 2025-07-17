import { useRef, useState } from "react"

export function AddFileImage() {
    const inputRef = useRef(null)
    const [fileName, setFileName] = useState("Agregar una imagen")

    // Hacemos que se ejecute el el form, ya que el mismo no se puede acceder
    const handleBoxClick = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    const handleImge = (event) => {
        if (event.target.files.length > 0) {
            const archivo = event.target.files[0]
            setFileName(archivo.name)
        } else {
            setFileName("Agregar una imagen")
        }
    }

    // Manejo el drag and drog: 
    const handleDragOver = (event)=> {
        event.preventDefault() // hace que se pueda soltar en el lugar
    }

    const setInfoInInput = (archivo)=> {
        if (inputRef.current) {
            const dataTransfer = new DataTransfer()
            dataTransfer.items.add(archivo)
            inputRef.current.files = dataTransfer.files // le ponemos al input q tenga esos valores
            // esto es para simular q el usuario cargo manualmente los archvios inputRef.current.files = dataTransfer.files
        }
    }

    const handleDrop = (event)=> {
        event.preventDefault() // evita que haga cosas raras
        const archivo = event.dataTransfer.files 
        if (archivo.length > 0) {
            const nombre = archivo[0].name
            setFileName(nombre)
            setInfoInInput(archivo[0])

            event.dataTransfer.clearData()
        }
    }

    return (
        <div className="file-container" onClick={handleBoxClick} onDrop={handleDrop} onDragOver={handleDragOver}>
            <p>{fileName}</p>
            <input
                ref={inputRef}
                style={{display: "none"}} 
                type="file" 
                onChange={handleImge}
                name="file"
            />
        </div>
    )
}