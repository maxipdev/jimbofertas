import { useEffect, useState } from "react"

export const useGetProducts = (category ="", search) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    let parametro = search

    if (!parametro) {
        parametro = ""
    }


    console.log(`http://localhost:1234/products/${category}${parametro}`)

    useEffect(()=> {
      console.log("hola")
        fetch(`http://localhost:1234/products/${category}${parametro}`)
        .then(res => {
            if (!res.ok) {
            throw new Error('Error en la solicitud')
            } 
            return res.json()
        })
        .then(data => setProducts(data))
        .catch(() => setError(true))
        .finally(() => setLoading(false))
    }, [category, parametro])

    return {products, loading, error}
}
