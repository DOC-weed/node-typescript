import IProduct from "./product";
import IUser from "./user";

interface ICart {
    user: IUser;
    products: {product: IProduct, quantity: number}[];
    totalAmount: number;
    updatedAt: Date;
}

export default ICart;