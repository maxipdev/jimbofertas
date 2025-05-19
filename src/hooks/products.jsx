import { useEffect, useState } from "react"
import { fetchData } from "../fetchData";

export const useGetProducts = (category ="", search) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    let parametro = search

    if (!parametro) {
        parametro = ""
    }

    useEffect(()=> {
        const combinado = `products/${category}${parametro}`

        fetchData({path: combinado})
        .then(data => setProducts(data))
        .catch(() => setError(true))
        .finally(() => setLoading(false))

    }, [category, parametro])

    return {products, loading, error}
}
