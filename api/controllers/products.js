import { ProductsModel } from "../models/products.js";


export class ProductsController {
    static async getAll (req, res) {
        try {
            const data = await ProductsModel.getAll()
            console.log(data)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json('error al acceder a la informacion')
        }
    }

    static async create (req, res) {
        try {
            const token = req.body.token
            const body = {
                name: req.body.name, 
                price : req.body.price,
                stock: req.body.stock,
                enable: req.body.enable,
                img: req.body.img,
                category: req.body.category  
            }

            const data = await ProductsModel.create({token, data: body})
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    
}