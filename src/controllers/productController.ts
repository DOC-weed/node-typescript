import { Request, Response } from 'express';
import { Product } from '../models/productModel';

// Get all products
export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find({});
        if (!products) {
            res.status(404).json({ message: 'No products found' });
            return;
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Get a product by ID
export const getProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Create a new product
export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Edit an existing product
export const editProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};
