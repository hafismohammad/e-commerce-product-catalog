import { deleteFromCloudinary } from "../config/cloudinary.js";
import HTTP_statusCode from "../constants/httpStatusCodes.js";
import { AppError } from "../middleware/error.middleware.js";
import { ProducRepository } from "../repositories/product.repositories.js";

const productRepository = new ProducRepository();

export class ProductService {
  async addProduct(productData) {
    try {
      return await productRepository.createNewProduct(productData);
    } catch (error) {
      throw error;
    }
  }

  async getAllProducts(filterData) {
    try {
      const products = await productRepository.getAllProduct(filterData);
      return products;
    } catch (error) {
      throw error;
    }
  }

  async getProduct(id) {
    try {
      const products = await productRepository.getProductById(id);
      if (!product) {
        throw new AppError(HTTP_statusCode.NOT_FOUND, "Product not found");
      }
      return products;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      const response = await productRepository.deleteProductById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(updatedData) {
    try {
      const { id, imageUrl } = updatedData;

      const existingProduct = await productRepository.getProductById(id);
      if (!existingProduct) {
        throw new AppError(HTTP_statusCode.NOT_FOUND, "Product not found");
      }

      if (existingProduct.image && imageUrl) {
        await deleteFromCloudinary(existingProduct.image);
      }

      return await productRepository.updateProductById(updatedData);
    } catch (error) {
      throw error;
    }
  }
}
