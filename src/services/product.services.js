import HTTP_statusCode from '../constants/httpStatusCodes.js';
import { AppError } from '../middleware/error.middleware.js';
import {ProducRepository } from '../repositories/product.repositories.js'

const productRepository = new ProducRepository()

export class ProductService {
    async addProduct(productData) {
        try {
            return await productRepository.createNewProduct(productData)
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
          return products;
        } catch (error) {
          throw error;
        }
      }
      

      async deleteProduct(id) {
        try {
          const response =  await productRepository.deleteProductById(id)
          return response
        } catch (error) {
          throw error;
        }
      }
}