import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ecommerce-product-catalog')
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('MongoDB connection error', error); 
    }
}

export default connectDB 