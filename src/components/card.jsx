
export function Card({status, name, img, price, openImage}) {

    const modifyPrice = (price) => {
    if (price < 1000) return price.toString();

    const numberStr = price.toString();
    let result = "";
    let count = 0;

    for (let i = numberStr.length - 1; i >= 0; i--) {
        result = numberStr[i] + result;
        count++;

        if (count === 3 && i !== 0) {
        result = "." + result;
        count = 0;
        }
    }

    return result;
    }

    return (
        <div className={`card ${status == false && "disable"}`}>
            {status == false ? <div className="overlay">
                <span className='sold-out-text'>AGOTADO</span>
            </div> : null}

            <div className="img-container" onClick={()=> openImage({name, img})}>
                <img src={`https://bswmbazkzzilbxoodxmr.supabase.co/storage/v1/object/public/products/public/${img}`} alt={name} />
            </div>
            <div className='line'></div>
            <div className="content">
                <div className="card-title">
                    {name}
                </div>
                <h3>$ {modifyPrice(price)}</h3>

            <a className={status == false ? 'link-disable': ""}
                href={`https://wa.me/5491154873779?text=Hola,%20%20me%20gustaria%20comprar%20el%20siguiente%20producto:%20${name}`}
                target="_blank"
                rel="noopener noreferrer">
                <button className={`boton ${status == false ? "boton-disable" : ""}`}>Comprar</button>
            </a>
            </div>
        </div>
    )
}