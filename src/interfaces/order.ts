import IProduct from "./product";
import IUser from "./user";

interface IOrder {
    user: IUser;
    products:{product: IProduct, quantity: number}[];
    totalAmount: number;
    status: 'pending' | 'paid' | 'shipped' | 'delivered';
    createdAt: Date;
    updatedAt: Date;
}
export default IOrder;