import { UserModel } from "../models/user.js";

export class UserController {
    static async login (req, res) {
        console.log("gola")
        // Hay que verificar que los datos enviados sean correctos
        try {
            const data  = {
                email: req.body.email,
                password: req.body.password
            }

            const { access_token } = await UserModel.login(data)


            if (!access_token) throw new Error()
            console.log("token ", access_token)


            res.status(200).json(access_token)
        } catch (error) {
            console.log(error)
            res.status(500).json("error al inciar sesion")
        }
    }

    static async checkLogin (req, res) {
        try {
            // El token al llegar aca ya esta validadao por el midelware y entoces solo devuelvo la respeuata que quiero para garantizar el acceso

            res.status(200).json(true)
        } catch {
            res.status(500).json(false)
        }
    }
}