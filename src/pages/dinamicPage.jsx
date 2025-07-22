import '../styles/card.css'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetProducts } from '../hooks/useGetProducts'
import { Loader } from '../components/loader'
import { ErrorPage } from './errorPage'
import { Card } from '../components/card'
import { useState } from 'react'
import { ImageModal } from '../components/imageModal'

export function DinamicPage () {
    const [searchParams]  = useSearchParams()
    const search = searchParams.get('product')
    const {category} = useParams()
    const {products, loading} = useGetProducts({category, search})
    const [openImage, setOpenImage] = useState(null)

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

        {openImage && <ImageModal closeModal={setOpenImage} img={openImage.img} name={openImage.name} />}

        <div className="card-container">

        {products.map(product => (
            <Card
                status={product.enable}
                key={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                openImage={setOpenImage}
            />
        ))}
        </div>
      </section>
    )
}