import express from 'express';
import connectToDatabase from './servers/http';
import router from './src/controllers/routes';

const app = express();
const port = 4001;

app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', router);

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();
