import mongoose, { ConnectOptions } from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://rendonisaiaas:rCCupSpGIIytqqXw@backenddb.uhiqs.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export default connectToDatabase;

