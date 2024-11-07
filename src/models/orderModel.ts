import { Schema, model } from 'mongoose';
import IOrder from '../interfaces/order';

const OrderSchema = new Schema<IOrder>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ product: { type: Schema.Types.ObjectId, ref: 'Product' }, quantity: { type: Number, required: true } }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'paid', 'shipped', 'delivered'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export const Order = model<IOrder>('Order', OrderSchema);