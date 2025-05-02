import express from 'express';
import cors from 'cors'

import productRoutes from './routes/product.routes.js'

const app = express();

app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/products", productRoutes);


const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
