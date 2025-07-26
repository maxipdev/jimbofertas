import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchData } from "../fetchData"
import { toast } from "sonner"

export const useCreateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ product, token }) => 
            fetchData({path: 'products', method: 'POST', body: product, token: token}), 
        onMutate: async ({ product }) => {
            await queryClient.cancelQueries('products')

            const previousProducts = queryClient.getQueryData(['products'])
            const newProduct = {...product, id: Date.now().toString()}

            queryClient.setQueryData('products', (old = []) => {
                return [...old, newProduct]
            })
            
            return { previousProducts }
        }, 
        onSuccess: () => {
            toast.success("Producto creado correctamente")
        },
        onError: (_err, _variable, context) => {
            queryClient.setQueryData(['products'], context.previousProducts)
            toast.error("Error al crear el producto")
        },
        onSettled: () => {
            queryClient.invalidateQueries('products')
        }
    })
}