import { useEffect, useState } from "react"
import { fetchData } from "../fetchData";

export const useGetProducts = ({category = null, search = null}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) // Digo que siempre está el loading activo cuanod apenas empieza la pagina
    const [error, setError] = useState(false)

    let URL = `products`
    if (category) {
        URL = `products/${category}`
    }
    else if (search) {
        URL = `products/search?product=${search}`
    }
    console.log(URL)

    useEffect(()=> {
        fetchData({path: URL})
        .then(data => setProducts(data))
        .catch(() => setError(true))
        .finally(() => setLoading(false))

    }, [category, search])

    console.log(loading)

    return {products, loading, error}
}