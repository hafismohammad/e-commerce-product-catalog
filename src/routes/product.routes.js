import express from 'express'

import { ProductController } from '../controllers/product.controllers.js'
import { upload } from '../utils/imageUpload.js'

const productController = new ProductController()


const router = express.Router()



router.post('/', upload.single('image'), productController.addProduct)
router.get('/',  productController.getAllProducts)
router.get('/:id',  productController.getProduct)
router.delete('/:id',  productController.deleteProduct)
router.put('/:id', upload.single('image'), productController.updateProduct);





export default router