import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { fetchData } from "../fetchData"

export const useDeleteProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, token }) => 
            fetchData({ path: `products/${id}`, method: 'DELETE', token }), 
        onMutate: async ({id}) => {
            await queryClient.cancelQueries('products')

            const previousProducts = queryClient.getQueryData(['products'])

            queryClient.setQueryData(['products'], (old = []) =>
                old.filter(p => p.id !== id)
            )
            
            return { previousProducts }
        }, 
        onSuccess: () => {
            toast.success('Eliminado correctamente')
        },
        onError: (_err, { id }, context) => {
            queryClient.setQueryData(['products'], context.previousProducts)
            toast.error('Ocurrió un error inesperado al eliminar el producto')
        },
        onSettled: () => {
            queryClient.invalidateQueries('products')
        }
    })
}



