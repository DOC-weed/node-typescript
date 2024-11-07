import { Schema, model } from 'mongoose';
import ICart from '../interfaces/cart';

const CartSchema = new Schema<ICart>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ product: { type: Schema.Types.ObjectId, ref: 'Product' }, quantity: { type: Number, required: true } }],
    totalAmount: { type: Number, required: true },
    updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export const Cart = model<ICart>('Cart', CartSchema);