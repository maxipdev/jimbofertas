import { useState } from "react";
import { Modal } from "../components/modal";
import '../card.css'

export function AdminPage () {
    const [openModal, setOpenModal] = useState(false)
    
    return (
        <>
        <div className="title-container">
            <h1 className="title">Panel de control</h1>
            <button onClick={()=> setOpenModal(true)}>Nuevo Producto</button>
        </div>
        {openModal && 
            <Modal setOpenModal={setOpenModal} title={"Crear Publicación"}>
                <div className="crearPublicacion-container">
                    <form autoComplete="Off">
                        <input type="file" name="imagen"/>
                        <input type="text" placeholder="Nombre"/>
                        <input type="number" placeholder="Precio"/>
                        <button>Crear Publicación</button>
                    </form>
                </div>
            </Modal>
        }

        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src="https://i0.wp.com/loquiero.com.ar/wp-content/uploads/2024/05/iPhone_11_green1.jpg?fit=900%2C900&ssl=1" alt="soy una imagen" />
            </div>
            <div className='line'></div>
            <div className="content adminContent">
              <h2>IPhone 11</h2>
              <h3>$ 750.000</h3>
              <button className="boton">Desabilitar</button>
              <button className="boton">Eiminar</button>
              <button className="boton">Editar</button>
            </div>
          </div>

          <div className="card">
            <div className="img-container">
              <img src="https://i0.wp.com/loquiero.com.ar/wp-content/uploads/2024/05/iPhone_11_green1.jpg?fit=900%2C900&ssl=1" alt="soy una imagen" />
            </div>
            <div className='line'></div>
            <div className="content adminContent">
              <h2>IPhone 11</h2>
              <h3>$ 750.000</h3>
              <button className="boton">Desabilitar</button>
              <button className="boton">Eiminar</button>
              <button className="boton">Editar</button>
            </div>
          </div>

        </div>
        </>
    )
}