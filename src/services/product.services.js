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
}