import models from '../models';

const registerUser = async data => {
	const user = await models.User.create(data);
	return user;
};

const loginUser = async data => {
	//temporary moved the logic directly to the controller
};

export default {
	registerUser,
	loginUser
};
