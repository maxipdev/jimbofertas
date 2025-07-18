import { useSearchParams } from 'react-router-dom'
import { Loader } from '../components/loader'
import { useGetProducts } from '../hooks/products'
import '../styles/card.css'
import { Card } from '../components/card'

export function Home () {
    const [searchParams]  = useSearchParams()
    const search = searchParams.get('product')
    const {products, loading} = useGetProducts({search})

    if (loading) {
      return <Loader />
    }

    // Condiconal en caso de que no haya ningun resutado en la base de datos
    if (!loading && products.length == 0 && search) {
        return (
            <section>
                <h1>No hay resultados que coincidan con tu busqueda</h1>
            </section>
        )
    } 

    return (
        <section>
        <h1>Todos los productos</h1>

        <div className="card-container">

        {products.map(product => (
            <Card
                status={product.enable}
                key={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
            />
        ))}

        </div>
      </section>
    )
}