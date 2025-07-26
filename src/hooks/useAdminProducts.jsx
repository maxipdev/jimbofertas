
import { useAuth } from "./useAuth"
import { useCreateProduct } from "./useCreateProduct"
import { useUpdateProduct } from "./useUpdateProduct"
import { getFormData } from "./useGetFormInfo"
import { useDeleteProduct } from "./useDeleteProduct"

export const useAdminPage = () => {
    const { tokenRef } = useAuth()
    const token = tokenRef.current

    const createMutation = useCreateProduct()
    const updateMutation = useUpdateProduct()
    const deleteMutation = useDeleteProduct()
    
    const handleUpdate = async()=> {
        alert("Funcion desactivada momentaneamente, en cambio podes borrar el producto")
        const newProduct = await getFormData(e, token)

        //updateMutation.mutate({ product: newProduct, token })
    }

    const handleCreate = async(e)=> {
        const newProduct = await getFormData(e, token)
        createMutation.mutate({ product: newProduct, token })
    }

    const handleDelete = (id)=> {
        console.log(id)
        deleteMutation.mutate({ id, token })
    }

    const handleDisable = (id, status)=> {
        const data = {enable: !estado}
        
    }



    //Desabilita un producto
    // const Desabilitar = (id, estado) => {
    //     const data = {enable: !estado}
    //     const promesa = fetchData({path: `products/${id}`, method: 'PATCH', token: token, body: data})

    //     toast.promise(promesa, {
    //         loading: 'Guardando cambios.....',
    //         success: ()=>  {
    //             updateProducts({id, data})
    //             return 'Cambios Guardados correctamente'
    //         },
    //         error: 'Error al editar el producto'
    //     })
    // }



    // const updateProducts = ({id, data}) => {
    //     setProducts(prev => 
    //         prev.map(element => {
    //         if (element.id == id) {
    //             const originalProduct = {...element}

    //             // if (data.img) {
    //             //     originalProduct.img = data.img
    //             // }
    //             if (data.name) {
    //                 originalProduct.name = data.name
    //             }
    //             if (data.price) {
    //                 originalProduct.price = data.price
    //             }
    //             if (data.category) {
    //                 originalProduct.category = data.category
    //             }
    //             if ("enable" in data) {
    //                 originalProduct.enable = data.enable
    //             }

    //             return originalProduct
    //         } else {
    //             return element // REtornamos el producto normal pq no cambio
    //         }
    //         })
    //     )
        
    // }





    return {
        handleUpdate,
        handleCreate,
        handleDelete,
        handleDisable,
        loadingCreate: createMutation.isLoading
    }
}