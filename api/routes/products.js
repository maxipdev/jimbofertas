import { Router } from "express";
import { ProductsController } from "../controllers/products.js";
import { uploadSingleImage } from '../midelwares/imgTransform.js';
import { checkUserSession } from "../midelwares/userSession.js";

export const productsRouter = Router()

productsRouter.get('/', ProductsController.getAll)
productsRouter.post('/', checkUserSession, ProductsController.create)
productsRouter.delete('/', checkUserSession, ProductsController.delete)

productsRouter.put('/upload-img', checkUserSession, uploadSingleImage ,ProductsController.uploadImg)