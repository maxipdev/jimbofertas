import { useEffect, useRef, useState } from "react";
import { Modal } from "../components/modal";
import '../styles/card.css'
import '../styles/card-admin.css'
import { useAdminPage } from "../hooks/useAdminProducts";
import { Loader } from "../components/loader"; 
import { AddFileImage } from "../components/addFileImage";
import { AdminCard } from "../components/adminCard";


export function AdminPage () {
    const [openModal, setOpenModal] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const valorSelectedRef = useRef(null) 

    const {products, loading, GetProducts, CreateProduct, Desabilitar, DeleteProduct, Editar} = useAdminPage()
    //Pide los productos
    useEffect(()=> {
      GetProducts()
    }, [])

    // Creo el poducto
    const handlesubmit = (event)=> {
        CreateProduct(event)
    }

    const handleDelete = (id) => {
      DeleteProduct(id)
    }


    if (loading) {
      return <Loader />
    }

    
    return (
        <>
        <div className="title-container">
            <h1 className="title">Panel de control</h1>
            <button className="boton" onClick={()=> setOpenModal(true)}>Nuevo Producto</button>
        </div>

        {openModal && 
          <Modal setOpenModal={setOpenModal} title={"Crear Publicación"}>
              <div className="crearPublicacion-container">
                  <form autoComplete="Off" onSubmit={(event)=> handlesubmit(event)}>
                      <AddFileImage />
                      <input type="text" placeholder="Nombre" name="name" required/>
                      <input type="number" placeholder="Precio" name="price" required/>
                      <select name="category" required defaultValue="not-value">
                        <option value="not-value" hidden disabled>Selecciona una categoria</option>
                        <option value="6137d67b-2caf-4bfe-86f5-7f3900475166">electrodomesticos</option>
                        <option value="f090cd84-f11a-4207-b8e5-af044301cd1a">higene&hogar</option>
                        <option value="6f74901f-fbf0-42df-b2cc-627d200a62a9">indumentaria</option>
                        <option value="c3f7b751-a0ac-4385-9411-8dec0774c6a0">tecnologia</option>
                        <option value="351e0ef0-08c2-4da9-adc9-5d742c41c2d9">otros</option>
                      </select>
                      <button className="boton">Crear Publicación</button>
                  </form>
              </div>
          </Modal>
        } 

        {openModalEdit && 
          <Modal setOpenModal={setOpenModalEdit} title={"Editar Publicación"}>
              <div className="crearPublicacion-container">
                  <form autoComplete="Off" onSubmit={(event)=> Editar(event, valorSelectedRef.current)}>
                      <AddFileImage />
                      <input type="text" placeholder="Nombre" name="name"/>
                      <input type="number" placeholder="Precio" name="price"/>
                      <select name="category" defaultValue="not-value">
                        <option value="not-value" hidden disabled>Selecciona una categoria</option>
                        <option value="6137d67b-2caf-4bfe-86f5-7f3900475166">electrodomesticos</option>
                        <option value="f090cd84-f11a-4207-b8e5-af044301cd1a">higene&hogar</option>
                        <option value="6f74901f-fbf0-42df-b2cc-627d200a62a9">indumentaria</option>
                        <option value="c3f7b751-a0ac-4385-9411-8dec0774c6a0">tecnologia</option>
                        <option value="351e0ef0-08c2-4da9-adc9-5d742c41c2d9">otros</option>
                      </select>
                      <button className="boton">Editar Publicación</button>
                  </form>
              </div>
          </Modal>
        } 

        <div className="card-container">
          {products.map(product => (
              <AdminCard
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                status={product.enable}
                changeStatus={Desabilitar}
                delete={handleDelete}
                edit={setOpenModalEdit}
                key={product.id}
              />
          ))}
        </div>
        </>
    )
}