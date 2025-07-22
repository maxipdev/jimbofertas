import { useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useDeleteProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, token }) => 
            fetchData({ path: `products/${id}`, method: 'DELETE', token }), 
        onMutate: async ({id}) => {
            await queryClient.cancelQueries(['products'])

            const previousProducts = queryClient.getQueryData(['products'])

            queryClient.setQueryData(['products'], (old = []) =>
                old.filter(p => p.id !== id)
            )
            
            return { previousProducts }
        }, 
        onSuccess: (_data, { id }) => {
            toast.success({
                title: 'Eliminado correctamente',
                description: `Se eliminó el producto con id: ${id}`
            })
        },
        onError: (_err, { id }, context) => {
            queryClient.setQueryData(['products'], context.previousProducts)
            toast.error({
                title: 'Error al eliminar el producto',
                description: `Ocurrió un error inesperado al eliminar el producto con id: ${id}`
            })
        },
        onSettled: () => {
            queryClient.invalidateQueries(['products'])
        }
    })
}



