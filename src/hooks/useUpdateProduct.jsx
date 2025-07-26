import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchData } from "../fetchData"
import { toast } from "sonner"

export const useUpdateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ product, token }) => 
            fetchData({path: `products/edit/${id}`, method: 'PATCH', body: product, token: token}), 
        onMutate: async ({ product }) => {
            await queryClient.cancelQueries('products')

            const previousProducts = queryClient.getQueryData(['products'])

            queryClient.setQueryData(['products'], (old = []) =>
                old.map(p => p.id === updatedProduct.id ? { ...p, ...updatedProduct } : p)
            )
            
            return { previousProducts }
        }, 
        onSuccess: () => {
            toast.success('Actualizado correctamente')
        },
        onError: (_err, _variable, context) => { // los dejo el err y el updatedProduct pq es en el orden que se envian las cosas en el calback
            queryClient.setQueryData(['products'], context.previousProducts)
            toast.error('Error al actualizar el producto')
        },
        onSettled: () => {
            queryClient.invalidateQueries('products')
        }
    })
}