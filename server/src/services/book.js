import models from '../models';

const getAllBooks = async () => {
	const books = await models.Book.find()
		.populate('authors', ['name'])
		.populate('genres', ['label'])
		.select(['_id', 'title', 'cover']);
	return books;
};

const getBookById = async bookId => {
	const book = await models.Book.findById(bookId)
		.populate('authors', ['_id','name'])
		.populate('genres', ['label'])
		.populate('readers', ['username'])
		.select(['-__v', '-_id']);
	return book;
};

const getBooksByAuthor = async authorId => {
	const books = await models.Book.find({ authors: authorId })
		.populate('authors', ['name'])
		.populate('genres', ['label'])
		.select((['-__v', '-readers']));
	return books;
};

const createBook = async data => {
	const book = await models.Book.create(data);

	return book;
};

const deleteBook = async id => {
	const book = await models.Book.findById(id);

	let result = null;
	if (book) {
		result = await book.remove();
	}

	return result;
};

export default {
	getAllBooks,
	getBookById,
	getBooksByAuthor,
	createBook,
	deleteBook
};
