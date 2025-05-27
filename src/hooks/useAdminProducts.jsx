import { useState } from "react"
import { fetchData, uploadImage } from "../fetchData"
import { useAuth } from "./useAuth"
import { toast } from "sonner"

export const useAdminPage = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { tokenRef } = useAuth()
    const token = tokenRef.current
    
    // Obtiene los productos
    const GetProducts = () => {
        setLoading(true)
        fetchData({path: 'products/admin', method: 'GET', token: token})
        .then(data => setProducts(data))
        .catch(err => console.error(err))
        .finally(()=> setLoading(false))
    } 

    // Guarda en la base de datos la imagen
    const saveImage = (file) => {
        const formData = new FormData();
        formData.append('image', file);

        return uploadImage(formData, token)
        .then(res => {
            console.log(res)
            return res
        })
        .catch(()=> {return null})
    }

    // Guarda la descripcion en la base de datos
    const CreateProduct = async (event)=> {
        event.preventDefault()
        const formData = new FormData(event.target)

        const file = formData.get('file')
        const name = formData.get('name')
        const price = formData.get('price')
        const category = formData.get('category')


        console.log(name, file, price, category)
        const fileName = await saveImage(file)
        console.log(fileName)

        if (!fileName) return console.error("no se guardo la imagen")

        const data = {img: fileName, name, price, category}

        // Lo guardo en la tabla
        const promesa = fetchData({path: 'products', method: 'POST', body: data, token: token})
        toast.promise(promesa, {
            loading: 'Cargando....',
            success: ()=>  {
                setProducts(prev => [...prev, data])
                return 'Cambios Guardados correctamente'
            },
            error: {
                title: 'Error al crear el producto',
                description: 'En caso de que el error continue, por favor contactar al administrador',
            }
        })
    }

    //Desabilita un producto
    const Desabilitar = (id, estado) => {
        const data = {enable: !estado}
        const promesa = fetchData({path: `products/${id}`, method: 'PATCH', token: token, body: data})

        toast.promise(promesa, {
            loading: 'Guardando cambios.....',
            success: ()=>  {
                updateProducts({id, data})
                return 'Cambios Guardados correctamente'
            },
            error: 'Error al editar el producto'
        })
    }

    // Elimina el producto
    const DeleteProduct = (id) => {
        const promesa = fetchData({path: `products/${id}`, method: 'DELETE', token: token})

        toast.promise(promesa, {
            loading: 'Eliminado.....',
            success: ()=>  {
                setProducts(prev => prev.filter(product => product.id !== id))
                return {
                    title: 'Eliminado correctamente',
                    description: `Se elimino el producto con id: ${id}` 
                }
            },
            error: 'Error al eliminar el producto'
        })
    }

    const Editar = async (event, id) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        // const file = formData.get('file')
        const name = formData.get('name')
        const price = formData.get('price')
        const category = formData.get('category')

        const body = {}
        // console.log("hay img: ", file)

        // if (file) {
        //     // Borro la anterior: 
        //     await fetchData({path: `products/image/${id}`, method: 'DELETE', token: token})
        //     //Guardo la nueva imagen
        //     const fileName = await saveImage(file)
        //     if (!fileName) return console.error("no se guardo la imagen")
        //     console.log(fileName)
        //     body.img = fileName
        // }
        if (name) body.name = name
        if (price) body.price = price
        if (category) body.category = category


        const promesa = fetchData({path: `products/edit/${id}`, method: 'PATCH', body: body, token: token})
        toast.promise(promesa, {
            loading: 'Actualizando....',
            success: ()=>  {
                updateProducts({id, body})
                return 'Cambios Guardados correctamente'
            },
            error: {
                title: 'Error al actualizar el producto',
                description: 'En caso de que el error continue, por favor contactar al administrador',
            }
        })

    }

    const updateProducts = ({id, data}) => {
        setProducts(prev => 
            prev.map(element => {
            if (element.id == id) {
                const originalProduct = {...element}

                // if (data.img) {
                //     originalProduct.img = data.img
                // }
                if (data.name) {
                    originalProduct.name = data.name
                }
                if (data.price) {
                    originalProduct.price = data.price
                }
                if (data.category) {
                    originalProduct.category = data.category
                }
                if ("enable" in data) {
                    originalProduct.enable = data.enable
                }

                return originalProduct
            } else {
                return element // REtornamos el producto normal pq no cambio
            }
            })
        )
        
    }

    return {products, loading, GetProducts, CreateProduct, Desabilitar, DeleteProduct, Editar, updateProducts}
}