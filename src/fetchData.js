
export const fetchData = ({path = "", method = "GET", body = null})=> {
    const options = {
        method: method,
        headers: {'Content-Type': 'application/json'},
        credentials: "include"
    }

    if (body) options.body = JSON.stringify(body) // Incluyo a las options si existe el body

    // return fetch(`http://localhost:1234/${path}`, options)
    return fetch(`https://jimbofertas.vercel.app/api/${path}`, options)
    .then(res => {
        if (!res.ok) {
          throw new Error('Error en la solicitud')
        } 
        return res.json()
    })
}