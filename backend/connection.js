import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = () => {
  const uri = process.env.DATABASE_URL;
  if (uri) {
    mongoose
      .connect(uri)
      .then(() => {
        console.log('Connected to MongoDB ✅');
      })
      .catch((error) => {
        console.log('Could not connect to mongoDB', error);
      });
  } else {
    console.log('Please provide a valid URI');
  }
};

export default connection;
