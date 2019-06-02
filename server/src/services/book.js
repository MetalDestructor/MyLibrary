import models from '../models';

const getAllBooks = async () => {
	const authorParams = await models.Author.find()
		.select('_id')
		.then(res => {
			return res.map(r => r._id.toString());
		});

	tagSearchQuery = { authors: { $in: authorParams } };

	const authorParams = await models.Author.find()
		.select('_id')
		.then(res => {
			return res.map(r => r._id.toString());
		});

	tagSearchQuery = { authors: { $in: authorParams } };
};

export default {
	getAllBooks
};
