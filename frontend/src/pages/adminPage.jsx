import { useEffect, useState } from "react";
import { Modal } from "../components/modal";
import { fetchData } from "../fetchData"
import '../styles/card.css'
import '../styles/card-admin.css'
import { useAuth } from "../hooks/useAuth";

export function AdminPage () {
    const [openModal, setOpenModal] = useState(false)
    const [products, setProducts] = useState([])
    const { token } = useAuth

    const GetProducts = () => {
      useEffect(()=> {
        // fetch('http://localhost:1234/products')
        fetch('https://jimbofertas-api.vercel.app/products')
        .then(res => {
          if (!res.ok) {
            throw new Error('Error en la solicitud')
          } 
          return res.json()
        })
        .then(data => setProducts(data))
        .catch(err => console.error(err))
      }, [])
    }

    const saveImage = (file) => {
        const formData = new FormData();
        formData.append('image', file);

        // return fetch(`http://localhost:1234/products/upload-img`, {
        return fetch(`https://jimbofertas-api.vercel.app/products/upload-img`, {
            method: 'PUT',
            credentials: "include",
            body: formData
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Error en la solicitud')
            } 
            return res.json()
        })
        .then(res => {
            return res
        })
        .catch(()=> {return null})
    }

    const CreateProduct = async (event)=> {
        event.preventDefault()
        const formData = new FormData(event.target)

        const file = formData.get('file')
        const name = formData.get('name')
        const price = formData.get('price')
        const stock = formData.get('stock')
        const category = formData.get('category')

    
        const fileName = await saveImage(file)
        console.log(fileName)

        if (!fileName) return console.error("no se guardo la imagen")

        const data = {img: fileName, name, price, stock, category}
    
        // Lo guardo en la tabla
        fetchData({path: 'products', method: 'POST', body: data})
        .then(()=>  alert("creado correctamente"))
        .catch(err => console.error(err))
    }
 


    // HAy que arreglar este
    const DeleteProduct = (product_id) => {
      fetch('http://localhost:1234/products', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product_id)
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Error en la solicitud')
        } 
        return res.json()
      })
      .then(console.log("eliminado corectamente"))
      .catch(err => console.error(err))
    }
  
    GetProducts() 

    
    return (
        <>
        <div className="title-container">
            <h1 className="title">Panel de control</h1>
            <button className="boton" onClick={()=> setOpenModal(true)}>Nuevo Producto</button>
        </div>

        {openModal && 
          <Modal setOpenModal={setOpenModal} title={"Crear Publicación"}>
              <div className="crearPublicacion-container">
                  <form autoComplete="Off" onSubmit={(event)=> CreateProduct(event)}>
                      <input type="file" name="file" required/>
                      <input type="text" placeholder="Nombre" name="name" required/>
                      <input type="number" placeholder="Precio" name="price" required/>
                      <input type="number" placeholder="Stock" name="stock" required/>
                      <select name="category" required defaultValue="not-value">
                        <option value="not-value" hidden disabled>Selecciona una categoria</option>
                        <option value="6137d67b-2caf-4bfe-86f5-7f3900475166">electrodomesticos</option>
                        <option value="f090cd84-f11a-4207-b8e5-af044301cd1a">higene&hogar</option>
                        <option value="6f74901f-fbf0-42df-b2cc-627d200a62a9">indumentaria</option>
                        <option value="c3f7b751-a0ac-4385-9411-8dec0774c6a0">tecnologia</option>
                        <option value="351e0ef0-08c2-4da9-adc9-5d742c41c2d9">otros</option>
                      </select>
                      <button>Crear Publicación</button>
                  </form>
              </div>
          </Modal>
      }

        <div className="card-container">
          <div className="card card-admin">
            <div className="img-container img-admin">
              <img src="https://i0.wp.com/loquiero.com.ar/wp-content/uploads/2024/05/iPhone_11_green1.jpg?fit=900%2C900&ssl=1" alt="soy una imagen" />
            </div>
            <div className='line'></div>
            <div className="content adminContent">
              <h2>IPhone 11</h2>
              <h3>$ 750.000</h3>
              <div className="btn-container">
                <button className="boton">Editar</button>
                <button className="boton">Eiminar</button>
                <button className="boton">Desabilitar</button>
              </div>
            </div>
          </div>



          {products.map(producto => (
              <div className="card card-admin" key={producto.id}>
                <div className="img-container img-admin">
                  <img src={`https://bswmbazkzzilbxoodxmr.supabase.co/storage/v1/object/public/products/public/${producto.img}`} alt={`imagen de ${producto.name}`} />
                </div>
              <div className='line'></div>
              <div className="content adminContent">
                <h2>{producto.name}</h2>
                <h3>$ {producto.price}</h3>
                <div className="btn-container">
                  <button className="boton">Editar</button>
                  <button className="boton">Eiminar</button>
                  <button className="boton">{producto.enable ? "Desabilitar" : "Habilitar"}</button>
                </div>
              </div>
            </div>
          ))}



          <div className="card card-admin">
            <div className="img-container img-admin">
              <img src="https://i0.wp.com/loquiero.com.ar/wp-content/uploads/2024/05/iPhone_11_green1.jpg?fit=900%2C900&ssl=1" alt="soy una imagen" />
            </div>
            <div className='line'></div>
            <div className="content adminContent">
              <h2>IPhone 11</h2>
              <h3>$ 750.000</h3>
              <div className="btn-container">
                <button className="boton">Editar</button>
                <button className="boton">Eiminar</button>
                <button className="boton">Desabilitar</button>
              </div>
            </div>
          </div>

        </div>
        </>
    )
}