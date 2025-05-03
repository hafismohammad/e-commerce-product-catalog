import ProductModel from "../models/product.model.js"


export class ProducRepository {
    async createNewProduct(productData) {
        try {

          const product = new ProductModel({
            productName: productData.productName,
            description: productData.description,
            price: productData.productPrice,
            category: productData.category,
            image: productData.imageUrl,
          });
    
          return await product.save();
        } catch (error) {
          throw error; 
        }
      } 
      
      async getAllProduct(filters) {
        try {
          const { category, minPrice, maxPrice, search } = filters;
        const query = {};
      
        if (category) query.category = category;
      
        if (minPrice) {
          query.price = { ...query.price, $gte: parseInt(minPrice) };
        }
      
        if (maxPrice) {
          query.price = { ...query.price, $lte: parseInt(maxPrice) };
        }
      
        if (search) {
          query.productName = { $regex: search, $options: "i" };
        }
      
        return await ProductModel.find(query);
        } catch (error) {
          throw error; 
        }
      }


      async getProductById(id) {
        try {
          return await ProductModel.findById(id)
        } catch (error) {  
         throw error; 
        }
      }

      async deleteProductById(id) {
        try {
          const res = await ProductModel.findByIdAndDelete(id)
          return res
          
        } catch (error) {  
         throw error; 
        }
      }
      
}
