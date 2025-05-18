import { ProductsModel } from "../models/products.js";
import crypto from 'node:crypto'

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

    static async getSpecificProduct (req, res) {
        try {
            const data = await ProductsModel.getSpecificProduct()
            console.log(data)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json('error al acceder a la informacion')
        }
    }

    static async uploadImg (req, res) {
        try {
            const access_token = req.session.token
            const archivo = req.file; // multer pone el archivo aquí

            if (!archivo) {
                throw new Error({ error: 'No se envió archivo' })
            }

            const tipo = archivo.mimetype

            const allowedExtensions = ['image/jpeg', 'image/png', 'image/webp'];

            if (!allowedExtensions.includes(tipo)) {
                throw new Error({ error: 'Tipo de archivo no válido' })
            }

            const specifType = tipo.split('/')[1]
            const id = crypto.randomUUID()
            const name = `${id}.${specifType}`
            
            const data = await ProductsModel.uploadImg({token: access_token , archivo, name, tipo})
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }


    static async create (req, res) {
        console.log("me ejecuto yo")
        try {
            const token = req.session.token
            const body = {
                name: req.body.name, 
                price : req.body.price,
                stock: req.body.stock,
                img: req.body.img,
                category: req.body.category  
            }

            console.log(token)

            const data = await ProductsModel.create({token, data: body})
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    static async delete (req, res) {
        try {
            const token = req.token
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