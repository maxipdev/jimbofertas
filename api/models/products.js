import fetch from "node-fetch"

export class ProductsModel {
    static async getAll () {
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

    static async create ({ token, data}) {
        const url = 'https://bswmbazkzzilbxoodxmr.supabase.co/rest/v1/products'

        try {
            const respuesta = await fetch (url, {
                method: 'POST',
                headers:  {
                    apikey: `${process.env.SUPABASE_KEY}`,
                    Authorization: `${token}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=minimal"
                },
                body: JSON.stringify(data)
            })


            console.log(respuesta.ok) // Dice si encuentra un error al guradr en la base de datos
            if (!respuesta.ok) {
              throw new Error('Error al guardar en la base de datos:')
            }

            return 'created succesfully'
        } catch (error) {
            return error
        }
    }
}

