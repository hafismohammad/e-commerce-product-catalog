import HTTP_statusCode from "../constants/httpStatusCodes.js";
import { ProductService } from "../services/product.services.js";

const productService = new ProductService();

export class ProductController {
  async addProduct(req, res, next) {
    try {
      if (req.file) {
        console.log("Uploaded file:", req.file);
      } else {
        console.log("No file uploaded");
      }
      const image = req.file.originalname
 
      console.log('req.body', req.body);
      console.log('req.file', req.file);

      
      const { productName, description, productPrice, category } = req.body;

      const newProduct = await productService.addProduct({productName, description, productPrice, category, image})
      console.log('newProduct',newProduct);
      
      res
        .status(HTTP_statusCode.CREATED)
        .json({ message: "User Data fetched successfully",data: newProduct});
    } catch (error) {
        next(error)
    }
  }
}
