import { fetchData } from "../fetchData"
import { useQuery } from '@tanstack/react-query'

export const useGetProducts = ({category = null, search = null}) => {

    let URL = `products`
    if (category) {
        URL = `products/${category}`
    }
    else if (search) {
        URL = `products/search?product=${search}`
    }

    const { isLoading, isError, data: products = [] } = useQuery({
        queryKey: ['products', category, search],
        queryFn: async () => await fetchData({ path: URL }),
        refetchOnWindowFocus: false,
        refetchOnMount: false, 
        staleTime: 1000 * 60 * 5 // cache fresca por 5 minutos
    })

    return {products, loading: isLoading, error: isError}
}