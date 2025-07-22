import { useState } from "react"

export function AdminCard({id, name, img, price, status, changeStatus, edit, handleDelete}) {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOcultar = ()=> {
        alert("La función ocultar todavía se encuentra en proceso de desarrollo")
    }

    return (
        <div className={`card card-admin ${openMenu ? "big-card" : ""}`}>

            <div className="img-container">
                <img src={`https://bswmbazkzzilbxoodxmr.supabase.co/storage/v1/object/public/products/public/${img}`} alt={name} />
            </div>

            <div className='line'></div>

            <div className="content">
                <div className="card-title">{name}</div>
                <h3>$ {price}</h3>

                <button className={`boton ${status ? "" : "btn-disable"}`} onClick={()=> changeStatus(id, status)}>{status ? "Desabilitar" : "Habilitar"}</button>

                <p onClick={()=> setOpenMenu(!openMenu)}>{openMenu ? "Ver menos" : "Ver más opciones"}</p>
                <div className={`extra-content ${openMenu ? "open" : ""}`}>
                    <button className="boton" onClick={()=> edit(true)}>Editar</button>
                    <button className="boton" onClick={()=> handleDelete(id)}>Eliminar</button>
                    <button className="boton" onClick={handleOcultar}>Ocultar producto</button>
                </div>
                
            </div>
        </div>
    )
}