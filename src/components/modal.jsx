import "../styles/modal.css"

export const Modal = ({children, setOpenModal, title}) => {
    
    return (
        <div className="contenedor-modal">
            <div className="contenido-modal">
                <div className="close-modal" onClick={()=> setOpenModal(false)}>X</div>
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    )
}