import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchData } from "../fetchData"
import { toast } from "sonner"

export const useChangeVisibilityProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, product, token }) => 
            fetchData({path: `products/${id}`, method: 'PATCH', body: product, token: token}), 
        onMutate: async ({ product }) => {
            await queryClient.cancelQueries('products')

            const previousProducts = queryClient.getQueryData(['products'])

            queryClient.setQueryData(['products'], (old = []) =>
                old.map(p => p.id === product.id ? { ...p, ...product } : p)
            )
            
            return { previousProducts }
        }, 
        onSuccess: () => {
            toast.success('Visibilidad actualizada correctamente')
        },
        onError: (_err, _variable, context) => { // los dejo el err y el updatedProduct pq es en el orden que se envian las cosas en el calback
            queryClient.setQueryData(['products'], context.previousProducts)
            toast.error('Error al cambiar la visibilidad del producto')
        },
        onSettled: () => {
            queryClient.invalidateQueries('products')
        }
    })
}