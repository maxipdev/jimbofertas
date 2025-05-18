import fetch from "node-fetch"

export class UserModel {
    static async login (userInfo) {
        try {
            const URL = 'https://bswmbazkzzilbxoodxmr.supabase.co/auth/v1/token?grant_type=password'

            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    apikey: `${process.env.SUPABASE_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })

            if (!response.ok) {
                throw new Error('Error al guardar en la base de datos:')
            }
  
            const token = await response.json()
            return token
        } catch (error) {
            return error
        }
    }
}