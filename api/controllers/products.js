import { ProductsModel } from "../models/products.js";
import crypto from 'node:crypto'

export class ProductsController {
    //Get general
    static async getAll (req, res) {
        try {
            const data = await ProductsModel.getAll()
            console.log(data)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json('error al acceder a la informacion')
        }
    }

    // Para el buscador
    static async search (req, res) {
        try {
            const query = req.query.product
            const data = await ProductsModel.search(query)
            console.log(data)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json('error al acceder a la informacion')
        }
    }

    // Para las categorias
    static async getByCategories (req, res) {
        try {
            const categoria = req.params.category
            console.log(categoria)
            const listaDeCategorias = [
            { id: "351e0ef0-08c2-4da9-adc9-5d742c41c2d9", name: "otros" },
            { id: "6137d67b-2caf-4bfe-86f5-7f3900475166", name: "electrodomesticos" },
            { id: "6f74901f-fbf0-42df-b2cc-627d200a62a9", name: "indumentaria" },
            { id: "c3f7b751-a0ac-4385-9411-8dec0774c6a0", name: "tecnologia" },
            { id: "f090cd84-f11a-4207-b8e5-af044301cd1a", name: "higene&hogar" }
            ]

            const {id} = listaDeCategorias.find(element => element.name == categoria.toLowerCase())
            console.log(id)

            const data = await ProductsModel.getByCategory(id)
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
            const token = req.session.token
            const id = req.params.id

            const data = await ProductsModel.delete({token, id})
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async deleteImage (req, res) {
        try {
            const token = req.session.token
            const id = req.params.id

            const data = await ProductsModel.deleteImage({token, id})
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async cangeVisibility (req, res) {
        try {
            const token = req.session.token
            const id = req.params.id
            const body = {
                enable: req.body.enable
            }

            const data = await ProductsModel.patch({token, id, data: body}) 
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }

    static async patch (req, res) {
        try {
            const token = req.session.token
            const id = req.params.id

            const data = await ProductsModel.patch({token, id, data: req.body}) 
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
}