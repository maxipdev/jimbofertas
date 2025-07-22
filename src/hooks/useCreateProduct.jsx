import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ product, token }) => 
            fetchData({path: 'products', method: 'POST', body: product, token: token}), 
        onMutate: async ({ product }) => {
            await queryClient.cancelQueries(['products'])

            const previousProducts = queryClient.getQueryData(['products'])

            queryClient.setQueryData(['products'], (old = []) => {
                [...old, product]
            })
            
            return { previousProducts }
        }, 
        onSuccess: () => {
            toast.success({
                title: 'Creado correctamente',
                description: `Se creó el producto`
            })
        },
        onError: (_err, _variable, context) => {
            queryClient.setQueryData(['products'], context.previousProducts)
            toast.error({
                title: 'Error al actualizar el producto',
                description: `Ocurrió un error inesperado al crear el producto, por favor si el error contiua contactar al administrador`
            })
        },
        onSettled: () => {
            queryClient.invalidateQueries(['products'])
        }
    })
}