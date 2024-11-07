import { Request, Response } from 'express';
import { Cart } from '../models/cartModel';

// Get all carts
export const getCarts = async (req: Request, res: Response): Promise<void> => {
    try {
        const carts = await Cart.find({});
        if (!carts) {
            res.status(404).json({ message: 'No carts found' });
            return;
        }
        res.status(200).json(carts);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Get a cart by ID
export const getCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const cart = await Cart.findById(req.params.id);
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Create a new cart
export const createCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const cart = new Cart(req.body);
        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Edit an existing cart
export const editCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Delete a cart
export const deleteCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        res.status(200).json({ message: 'Cart deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};
