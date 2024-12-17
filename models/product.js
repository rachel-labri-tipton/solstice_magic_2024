const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the schema of a product 
const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})

module.export = mongoose.model('Product', productSchema); 

