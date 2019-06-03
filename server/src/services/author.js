import models from '../models';

const getAllAuthors = async () => {
	const authors = await models.Author.find();
	return authors;
};

const getAuthorById = async id => {
	const author = await models.Author.findById(id);
	return author;
};

const createAuthor = async data => {
	const author = await models.Author.create({
		name: data.name,
		description: data.description,
		born: data.born
	});
	return author;
};

const deleteAuthor = async id => {
	const author = await models.Author.findById(id);

	let result = null;
	if (author) {
		result = await author.remove();
	}

	res.send(result);
};

export default {
	getAllAuthors,
	getAuthorById,
	createAuthor,
	deleteAuthor
};
