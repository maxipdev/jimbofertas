import fetch from "node-fetch"

export class ProductsModel {
    static async getAll () { // solo  da los q tienen acceso por el usuario
        const url = 'https://bswmbazkzzilbxoodxmr.supabase.co/rest/v1/products?select=*&enable=eq.true' 
        const respuesta = await fetch (url, {
            method: 'GET',
            headers: {
                apikey: `${process.env.SUPABASE_KEY}`,
                Authorization: `${process.env.SUPABASE_KEY_Barer}`
            }
        })

        const data = await respuesta.json()
        return data
    }

    static async getAllAdmin () { // solo  da los q tienen acceso por el usuario
        const url = 'https://bswmbazkzzilbxoodxmr.supabase.co/rest/v1/products?select=*' 
        const respuesta = await fetch (url, {
            method: 'GET',
            headers: {
                apikey: `${process.env.SUPABASE_KEY}`,
                Authorization: `${process.env.SUPABASE_KEY_Barer}`
            }
        })

        const data = await respuesta.json()
        return data
    }

    static async getSpecificProduct (search = "campera") {
        const url = `https://bswmbazkzzilbxoodxmr.supabase.co/rest/v1/products?select=*&name=ilike.*${search}*&enable=eq.true`

        const respuesta = await fetch (url, {
            method: 'GET',
            headers: {
                apikey: `${process.env.SUPABASE_KEY}`,
                Authorization: `${process.env.SUPABASE_KEY_Barer}`
            }
        })

        const data = await respuesta.json()
        return data
    }


    static async getByCategory (category) { // solo  da los q tienen acceso por el usuario
        const url = `https://bswmbazkzzilbxoodxmr.supabase.co/rest/v1/products?select=*&category=ilike.*${category}*&enable=eq.true`
        const respuesta = await fetch (url, {
            method: 'GET',
            headers: {
                apikey: `${process.env.SUPABASE_KEY}`,
                Authorization: `${process.env.SUPABASE_KEY_Barer}`
            }
        })

        const data = await respuesta.json()
        return data
    }


    static async uploadImg ({token, archivo, name, tipo}) {
        try {
            const url = `https://bswmbazkzzilbxoodxmr.supabase.co/storage/v1/object/products/public/${name}`

            const respuesta = await fetch (url, {
                method: 'PUT',
                headers:  {
                    apikey: `${process.env.SUPABASE_KEY}`,
                    Authorization: `Bearer ${token}`,
                    "Content-Type": tipo,
                },
                body: archivo.buffer 
            })

            if (!respuesta.ok) {
                const errorText = await respuesta.text()
                throw new Error(`Error al guardar en Supabase: ${respuesta.status} ${respuesta.statusText} - ${errorText}`)
            }

            return name

        } catch (error) {
            throw error
        }
    }

    static async create ({ token, data}) {
        try {
            const url = 'https://bswmbazkzzilbxoodxmr.supabase.co/rest/v1/products'
            const respuesta = await fetch (url, {
                method: 'POST',
                headers:  {
                    apikey: `${process.env.SUPABASE_KEY}`,
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=minimal"
                },
                body: JSON.stringify(data)
            })


            console.log(respuesta.ok) // Dice si encuentra un error al guradr en la base de datos
            if (!respuesta.ok) {
                const errorText = await respuesta.text()
                throw new Error(`Error al guardar en Supabase: ${respuesta.status} ${respuesta.statusText} - ${errorText}`)
            }

            return 'created succesfully'
        } catch (error) {
            throw error
        }
    }
}

