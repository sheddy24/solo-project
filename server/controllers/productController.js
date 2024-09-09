
import Product from "../models/productModel.js"

export const getProducts=async(req,res)=>{
    try {
        const products = await Product.find(); // Fetch all products
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
      }

}