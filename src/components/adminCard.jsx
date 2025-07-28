import { useState } from "react"

export function AdminCard({id, name, img, price, status, handleDisable, handleUpdate, handleDelete, openImage}) {
    const [openMenu, setOpenMenu] = useState(false)

    const changeSelectedProduct = (id)=> {
        const oldState = {id, name, img, price, enable: status}
        handleUpdate(oldState) // activa la modal de edicion y le paso el viejo estado
    }

    const handleOcultar = ()=> {
        alert("La función ocultar todavía se encuentra en proceso de desarrollo")
    }

    return (
        <div className={`card card-admin ${openMenu ? "big-card" : ""}`}>

            <div className="img-container" onClick={()=> openImage({name, img})}>
                <img src={`https://bswmbazkzzilbxoodxmr.supabase.co/storage/v1/object/public/products/public/${img}`} alt={name} />
            </div>

            <div className='line'></div>

            <div className="content">
                <div className="card-title">{name}</div>
                <h3>$ {price}</h3>

                <button className={`boton ${status ? "" : "btn-disable"}`} onClick={()=> handleDisable(id, status)}>{status ? "Desabilitar" : "Habilitar"}</button>

                <p onClick={()=> setOpenMenu(!openMenu)}>{openMenu ? "Ver menos" : "Ver más opciones"}</p>
                <div className={`extra-content ${openMenu ? "open" : ""}`}>
                    <button className="boton" onClick={()=> changeSelectedProduct(id)}>Editar</button>
                    <button className="boton" onClick={()=> handleDelete(id)}>Eliminar</button>
                    <button className="boton" onClick={handleOcultar}>Ocultar producto</button>
                </div>
                
            </div>
        </div>
    )
}