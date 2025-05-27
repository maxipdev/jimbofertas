import '../styles/card.css'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetProducts } from '../hooks/products'
import { Loader } from '../components/loader'
import { ErrorPage } from './errorPage'

export function DinamicPage () {
    const [searchParams]  = useSearchParams()
    const search = searchParams.get('product')
    console.log(search)
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
            <div className={`card ${product.enable == false && "disable"}`} key={product.id}>
                {product.enable == false ?                 <div className="overlay">
                    <span className='sold-out-text'>AGOTADO</span>
                </div> : null}

                <div className="img-container">
                    <img src={`https://bswmbazkzzilbxoodxmr.supabase.co/storage/v1/object/public/products/public/${product.img}`} alt={product.name} />
                </div>
                <div className='line'></div>
                <div className="content">
                    <h2>{product.name}</h2>
                    <h3>$ {product.price}</h3>

                <a className={product.enable == false && 'link-disable'}
                    href={`https://wa.me/5491138276214?text=Hola,%20%20me%20gustaria%20comprar%20el%20siguiente%20producto:%20${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className={`boton ${product.enable == false && "boton-disable"}`}>Comprar</button>
                </a>
                </div>
            </div>
          ))}
        </div>
      </section>
    )
}