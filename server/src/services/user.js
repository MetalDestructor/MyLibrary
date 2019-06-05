import models from '../models';

const getUserById = async id => {
	const user = await models.User.findById(id);
	const newUser = { username: user.username, email: user.email };
	return newUser;
};

const createUser = async data => {
	const user = await models.User.create(data);
	return user;
}

const loginUser = async data => {
	const user = await models.User.findOne({username: data.username});

	if(!user){
		//no user found
	}
	if(user.password != data.password){
		//user not authenticated
	}
	return user;
};

export default {
	getUserById,
	createUser
};
