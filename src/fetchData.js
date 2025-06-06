
export const fetchData = ({path = "", method = "GET", body = null, token = ""})=> {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }

    if (body) options.body = JSON.stringify(body) // Incluyo a las options si existe el body

    // console.log(`http://localhost:1234/${path}`)
    // return fetch(`http://localhost:1234/${path}`, options)
    return fetch(`https://jimbofertas-api.vercel.app/${path}`, options)
    .then(res => {
        if (!res.ok) {
          throw new Error('Error en la solicitud')
        } 
        return res.json()
    })
}

export const uploadImage = (formData, token) => {
    const options = {
        method: 'PUT',
        credentials: "include",
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    // return fetch(`, options)
    //return fetch(`https://jimbofertas-api.vercel.app/products/upload-img`, options)
    //return fetch(`http://localhost:1234/products/upload-img`, options)
    return fetch(`https://jimbofertas-api.vercel.app/products/upload-img`, options)
    .then(res => {
        if (!res.ok) {
          throw new Error('Error en la solicitud')
        } 
        return res.json()
    })
}