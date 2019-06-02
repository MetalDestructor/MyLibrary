import mongoose from 'mongoose';

import Genre from './genre';
import Author from './author';
import User from './user';
import Book from './book';

const connectDb = () => {
	return mongoose.connect(process.env.DATABASE_URL, {
		useCreateIndex: true,
		useNewUrlParser: true
	});
};

const models = { User, Book, Author, Genre };

export { connectDb };

export default models;
