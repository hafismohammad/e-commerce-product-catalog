import express from 'express'

import { ProductController } from '../controllers/product.controllers.js'

const productController = new ProductController()


const router = express.Router()


// router.post('/products', productController)


export default router