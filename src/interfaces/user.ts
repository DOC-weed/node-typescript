interface IUser {
    name: string;
    email: string;
    password: string;
    role: 'customer' | 'admin';
    createdAt: Date;
    updatedAt: Date;
}

export default IUser;