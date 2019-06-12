import models from '../models';

const getUserById = async id => {
	const user = await models.User.findById(id).select(['-password', '-__v']);
	return user;
};

export default {
	getUserById
};
