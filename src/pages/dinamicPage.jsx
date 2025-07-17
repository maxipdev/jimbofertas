import '../styles/card.css'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetProducts } from '../hooks/products'
import { Loader } from '../components/loader'
import { ErrorPage } from './errorPage'
import { Card } from '../components/card'

export function DinamicPage () {
    const [searchParams]  = useSearchParams()
    const search = searchParams.get('product')
    const {category} = useParams()
    const {products, loading} = useGetProducts({category, search})

    if (loading) {
      return <Loader />
    }

    // Redirije en caso de que este vacia
    if (!loading && products.length == 0) {
        return <ErrorPage />
    }

    return (
        <section>
        <h1>Todos los productos</h1>

        <div className="card-container">

        {products.map(product => (
            <Card
                status={product.enable}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
            />
        ))}
        </div>
      </section>
    )
}