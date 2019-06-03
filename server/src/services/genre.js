import models from '../models';

const getAllGenres = async () => {
	const genres = await models.Genre.find();
	return genres;
};

const getGenreById = async id => {
	const genre = await models.Genre.findById(id);
	return genre;
};

const createGenre = async data => {
	const genre = await models.Genre.create({
		label: data.label
	});
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
