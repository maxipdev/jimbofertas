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
    console.log(URL)

    const { isLoading, isError, data: products = [] } = useQuery({
        queryKey: ['products', category, search],
        queryFn: async () => await fetchData({ path: URL }),
        refetchOnWindowFocus: false
    })


    // useEffect(()=> {
    //     fetchData({path: URL})
    //     .then(data => setProducts(data))
    //     .catch(() => setError(true))
    //     .finally(() => setLoading(false))

    // }, [category, search])

    return {products, loading: isLoading, error: isError}
}