
export function Card({status, name, img, price}) {
    return (
        <div className={`card ${status == false && "disable"}`}>
            {status == false ? <div className="overlay">
                <span className='sold-out-text'>AGOTADO</span>
            </div> : null}

            <div className="img-container">
                <img src={`https://bswmbazkzzilbxoodxmr.supabase.co/storage/v1/object/public/products/public/${img}`} alt={name} />
            </div>
            <div className='line'></div>
            <div className="content">
                <div className="card-title">
                    {name}
                </div>
                <h3>$ {price}</h3>

            <a className={status == false && 'link-disable'}
                href={`https://wa.me/5491159388165?text=Hola,%20%20me%20gustaria%20comprar%20el%20siguiente%20producto:%20${name}`}
                target="_blank"
                rel="noopener noreferrer">
                <button className={`boton ${status == false && "boton-disable"}`}>Comprar</button>
            </a>
            </div>
        </div>
    )
}