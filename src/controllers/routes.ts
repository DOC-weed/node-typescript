import { Router } from 'express';
import { getUsers, getUser, createUser, editUser, deleteUser } from './userController';
import { getProducts, getProduct, createProduct, editProduct, deleteProduct } from './productController';
import { getCarts, getCart, createCart, editCart, deleteCart } from './cartController';
import { getOrders, getOrder, createOrder, editOrder, deleteOrder } from './orderController';

const router = Router();

// User routes
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);


// Product routes
router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.post('/products', createProduct);
router.put('/products/:id', editProduct);
router.delete('/products/:id', deleteProduct);

// Cart routes
router.get('/carts', getCarts);
router.get('/carts/:id', getCart);
router.post('/carts', createCart);
router.put('/carts/:id', editCart);
router.delete('/carts/:id', deleteCart);

// Order routes
router.get('/orders', getOrders);
router.get('/orders/:id', getOrder);
router.post('/orders', createOrder);
router.put('/orders/:id', editOrder);
router.delete('/orders/:id', deleteOrder);

export default router;
