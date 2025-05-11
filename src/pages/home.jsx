import '../card.css'

export function Home () {
    return (
        <section>
        <h1>Todos los productos</h1>

        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src="https://i0.wp.com/loquiero.com.ar/wp-content/uploads/2024/05/iPhone_11_green1.jpg?fit=900%2C900&ssl=1" alt="soy una imagen" />
            </div>
            <div className='line'></div>
            <div className="content">
              <h2>IPhone 11</h2>
              <h3>$ 750.000</h3>

              <a  href="https://wa.me/5491138276214?text=Hola%20soy%20maxi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="boton">Comprar</button>
                </a>
              
            </div>
          </div>



          <div className="card">
            <div className="img-container">
              <img src="https://dcdn-us.mitiendanube.com/stores/001/157/926/products/whatsapp-image-2022-02-10-at-7-55-52-pm1-889afd55b22cdc89a516445338818101-1024-1024.jpeg" alt="soy una imagen" />
            </div>
            <div className="content">
              <h2>Campera de invierno</h2>
              <h3>$ 999.999</h3>
              <button className="boton">Comprar</button>
            </div>
          </div>

          <div className="card">
            <div className="img-container">
              <img src="https://i0.wp.com/loquiero.com.ar/wp-content/uploads/2024/05/iPhone_11_green1.jpg?fit=900%2C900&ssl=1" alt="soy una imagen" />
            </div>
            <div className="content">
              <h2>IPhone 11</h2>
              <h3>$ 750.000</h3>
              <button className="boton">Comprar</button>
            </div>
          </div>

          <div className="card">
            <div className="img-container">
              <img src="https://i0.wp.com/loquiero.com.ar/wp-content/uploads/2024/05/iPhone_11_green1.jpg?fit=900%2C900&ssl=1" alt="soy una imagen" />
            </div>
            <div className="content">
              <h2>IPhone 11</h2>
              <h3>$ 750.000</h3>
              <button className="boton">Comprar</button>
            </div>
          </div>

          <div className="card">
            <div className="img-container">
              <img src="https://i5.walmartimages.com/seo/Restored-iPhone-11-Unlocked-CDMA-GSM-128GB-Purple-Refurbished_70c68bf9-8932-4a08-a4f9-04dbae2eab10.2b46a044e2bd1c9bde25c3562960246c.jpeg" alt="soy una imagen" />
            </div>
            <div className="content">
              <h2>IPhone 11</h2>
              <h3>$ 750.000</h3>
              <button className="boton">Comprar</button>
            </div>
          </div>

          <div className="card">
            <div className="img-container">
              <img src="https://http2.mlstatic.com/D_NQ_NP_998696-MLA49321318270_032022-O.webp" alt="soy una imagen" />
            </div>
            <div className="content">
              <h2>Plato de cocina 1</h2>
              <h3>$ 500</h3>
              <button className="boton">Comprar</button>
            </div>
          </div>

          <div className="card">
            <div className="img-container">
              <img src="https://http2.mlstatic.com/D_NQ_NP_892407-MLA78186046124_082024-O.webp" alt="soy una imagen" />
            </div>
            <div className="content">
              <h2>Plato 2</h2>
              <h3>$ 65.656</h3>
              <button className="boton">Comprar</button>
            </div>
          </div>

          <div className="card">
            <div className="img-container">
              <img src="https://dcdn-us.mitiendanube.com/stores/001/157/926/products/whatsapp-image-2022-02-10-at-7-55-52-pm1-889afd55b22cdc89a516445338818101-1024-1024.jpeg" alt="soy una imagen" />
            </div>
            <div className="content">
              <h2>Campera de invierno</h2>
              <h3>$ 999.999</h3>
              <button className="boton">Comprar</button>
            </div>
          </div>

          <div className="card">
            <div className="img-container">
              <img src="https://dcdn-us.mitiendanube.com/stores/001/157/926/products/whatsapp-image-2022-02-10-at-7-55-52-pm1-889afd55b22cdc89a516445338818101-1024-1024.jpeg" alt="soy una imagen" />
            </div>
            <div className="content">
              <h2>Campera de invierno</h2>
              <h3>$ 999.999</h3>
              <button className="boton">Comprar</button>
            </div>
          </div> 

          <div className="card">
            <div className="img-container">
              <img src="https://dcdn-us.mitiendanube.com/stores/001/157/926/products/whatsapp-image-2022-02-10-at-7-55-52-pm1-889afd55b22cdc89a516445338818101-1024-1024.jpeg" alt="soy una imagen" />
            </div>
            <div className="content">
              <h2>Campera </h2>
              <h3>$ 999.999</h3>
              <button className="boton">Comprar</button>
            </div>
          </div>

        </div>
      </section>
    )
}