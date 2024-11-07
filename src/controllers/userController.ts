import { Request, Response } from 'express';
import { User } from '../models/userModel';


export const getUsers = async (req:Request, res: Response): Promise<void> =>{
    try {
        const user = await User.find({});
        if (!user) {
            res.status(404).json({ message: 'No users yet' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Oups!' ,error});
    }
}

// Get a user by ID
export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Oups!' ,error});
    }
};

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Oups!' ,error});
    }
};

// Edit an existing user
export const editUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Oups!' ,error});
    }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Oups!' ,error});
    }
};


