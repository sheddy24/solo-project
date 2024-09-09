import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  backview: {
    type: String,
    required: true,
  },
  sideview: {
    type: String,
    required: true,
  },
  cpu: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  screen: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
}, {
  timestamps: true, // Optional: adds createdAt and updatedAt fields
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
