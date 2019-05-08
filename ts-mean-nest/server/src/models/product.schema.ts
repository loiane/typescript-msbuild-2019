import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  price: Number,
  status: String,
  discounted: String,
  discount: Number,
  name: String,
  description: String,
  image: String,
  created: {
    type: Date,
    default: Date.now,
  },
});
