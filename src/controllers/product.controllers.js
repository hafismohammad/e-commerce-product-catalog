import { uploadToCloudinary } from "../config/cloudinary.js";
import HTTP_statusCode from "../constants/httpStatusCodes.js";
import { ProductService } from "../services/product.services.js";

const productService = new ProductService();

export class ProductController {
  async addProduct(req, res, next) {
    try {
      const imageFile = req.file
      let imageUrl
      if (imageFile) {
        const result = await uploadToCloudinary(imageFile.buffer, 'productImage');
        imageUrl = result.secure_url;
      }

      const { productName, description, productPrice, category } = req.body;

      const newProduct = await productService.addProduct({productName, description, productPrice, category, imageUrl})
      
      res
        .status(HTTP_statusCode.CREATED)
        .json({ message: "Product Data created successfully",data: newProduct});
    } catch (error) {
        next(error)
    }
  }

  async getAllProducts(req, res, next) {
    try {
      const { category, minPrice, maxPrice, search } = req.query;
  
      const response = await productService.getAllProducts({
        category,
        minPrice,
        maxPrice,
        search,
      });
  
      res.status(HTTP_statusCode.OK).json({
        message: "Product Data fetched successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
  
}
