import ProductModel from "../models/product.model.js"


export class ProducRepository {
    async createNewProduct(productData) {
        try {

          const product = new ProductModel({
            productName: productData.productName,
            description: productData.description,
            price: productData.productPrice,
            category: productData.category,
            image: productData.image,
          });
    
          return await product.save();
        } catch (error) {
          throw error; 
        }
      }   
}