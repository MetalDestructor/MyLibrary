import { Router } from 'express';
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt-nodejs';
import services from '../services';
import models from '../models';

const router = Router();

router.post('/login', async (req, res) => {
	try {
		const user = await models.User.findOne({ username: req.body.username });

		if (!user) {
			return res.status(401).send('Username or pass not correct!');
		}
		await bcrypt.compare(
			req.body.password,
			user.password,
			async (err, isMatch) => {
				if (isMatch) {
          const token = await services.auth.generateToken(user);
          console.log(token);
					return res.json({status:"success", token});
				} else {
					return res
						.status(401)
						.send('Username or pass not correct!');
				}
			}
		);
	} catch (e) {
		console.log(e.message);
		return res.status(401).send(e.message);
	}
});

router.post('/register', async (req, res) => {
	try {
		const token = await services.auth.registerUser(req.body);
		return res.status(200).send({token});
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

export default router;