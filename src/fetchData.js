
export const fetchData = async ({ path = "", method = "GET", body = null, token = "" }) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }

    if (body) options.body = JSON.stringify(body)

    const res = await fetch(`https://jimbofertas-api.vercel.app/${path}`, options)

    if (!res.ok) throw new Error('Error en la solicitud')

    return await res.json()  // Si ya viene como lo necesitás, ¡listo!
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