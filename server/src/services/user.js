import models from '../models';

const getUserById = async id => {
	const user = await models.User.findById(id);
	const newUser = { id: _id, username: user.username, email: user.email };
	return newUser;
};

export default {
	getUserById
};
