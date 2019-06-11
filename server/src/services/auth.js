import models from '../models';
import 'dotenv/config';
import jwt from 'jwt-simple';

const registerUser = async data => {
	const user = await models.User.create(data);
	const token = generateToken(user);
	return token;
};

const loginUser = async data => {
	//temporary moved the logic directly to the controller
};

const generateToken = async user => {
	const payload = { sub: user._id };

	const token = jwt.encode(payload, process.env.SECRET);
	return token;
};

export default {
	registerUser,
	loginUser,
	generateToken
};
