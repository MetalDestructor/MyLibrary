import models from '../models';

const getAllGenres = async () => {
	const genres = await models.Genre.find().select(['-__v']);
	return genres;
};

const getGenreById = async id => {
	const genre = await models.Genre.findById(id).select(['-__v']);
	return genre;
};

const createGenre = async data => {
	const genre = await models.Genre.create(data);
	return genre;
};

const deleteGenre = async id => {
	const genre = await models.Genre.findById(id);

	let result = null;
	if (genre) {
		result = await genre.remove();
	}

	return result;
};

export default {
	getAllGenres,
	getGenreById,
	createGenre,
	deleteGenre
};
