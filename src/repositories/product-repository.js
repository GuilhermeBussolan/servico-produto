const Product = require('../models/product');

class ProductRepository {
    async findAll() {
        return await Product.find({ active: true });
    }

    async findById(id) {
        return await Product.findById(id);
    }

    async create(productData) {
        const product = new Product(productData);
        return await product.save();
    }

    async update(id, productData) {
        return await Product.findByIdAndUpdate(
            id, 
            productData, 
            { new: true, runValidators: true }
        );
    }

    async delete(id) {
        return await Product.findByIdAndUpdate(
            id, 
            { active: false }, 
            { new: true }
        );
    }

    async findByCategory(category) {
        return await Product.find({ 
            category: category, 
            active: true 
        });
    }
}

module.exports = new ProductRepository();