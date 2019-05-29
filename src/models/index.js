import mongoose from 'mongoose';

import User from './user';
import Book from './book';

const connectDb = () => {
	return mongoose.connect(process.env.DATABASE_URL, {
		useCreateIndex: true,
		useNewUrlParser: true
	});
};

const models = { User, Book };

export { connectDb };

export default models;
