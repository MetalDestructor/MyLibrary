import models from '../models';

const getAllBooks = async () => {
	const books = await models.Book.find();
	return books;
};

const getBookById = async bookId => {
	const book = await models.Book.findById(bookId);
	return book;
};

const createBook = async data => {
	const book = await models.Book.create({
		title: data.title,
		description: data.description,
		genres: data.genres,
		authors: data.authors,
		readers: data.readers
	});

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
