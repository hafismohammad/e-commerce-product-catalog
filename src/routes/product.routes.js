import express from 'express'

import { ProductController } from '../controllers/product.controllers.js'
import { upload } from '../utils/imageUpload.js'

const productController = new ProductController()


const router = express.Router()


router.post('/', upload.single('image'), productController.addProduct)


export default router