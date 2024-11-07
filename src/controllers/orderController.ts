import { Request, Response } from 'express';
import { Order } from '../models/orderModel';

// Get all orders
export const getOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await Order.find({});
        if (!orders) {
            res.status(404).json({ message: 'No orders found' });
            return;
        }
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Get an order by ID
export const getOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Create a new order
export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Edit an existing order
export const editOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};

// Delete an order
export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Oups!', error });
    }
};
