import models from '../models';

const getAllBooks = async () => {
	const books = await models.Book.find().populate('authors').populate('genres').populate('readers');
	return books;
};

const getBookById = async bookId => {
	const book = await models.Book.findById(bookId).populate('authors').populate('genres').populate('readers');
	console.log(book);
	return book;
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
	createBook,
	deleteBook
};
