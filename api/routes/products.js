import { Router } from "express";
import { ProductsController } from "../controllers/products.js";
import { uploadSingleImage } from '../midelwares/imgTransform.js';
import { checkUserSession } from "../midelwares/userSession.js";

export const productsRouter = Router()

productsRouter.get('/admin', checkUserSession, ProductsController.getAll)
productsRouter.get('/search', ProductsController.search)
productsRouter.get('/', ProductsController.getAll)
productsRouter.get('/:category', ProductsController.getByCategories)

productsRouter.post('/', checkUserSession, ProductsController.create)

productsRouter.delete('/:id', checkUserSession, ProductsController.delete)

productsRouter.patch('/edit/:id', checkUserSession, ProductsController.patch)
productsRouter.patch('/:id', checkUserSession, ProductsController.cangeVisibility)

productsRouter.patch('/img/:id', checkUserSession ,ProductsController.deleteImage)
productsRouter.put('/upload-img', checkUserSession, uploadSingleImage ,ProductsController.uploadImg)