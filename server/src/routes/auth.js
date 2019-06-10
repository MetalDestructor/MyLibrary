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
	await bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
		if (isMatch) {
			var payload = {};

			const token = jwt.encode(payload, '123');
			return res.json({status:"success", token});
		} else {
			return res.status(401).send('Username or pass not correct!');
		}
    });
  } catch (e) {
    console.log(e.message);
    return res.status(401).send(e.message);
  }
});

router.post('/register', async (req, res) => {
  try {
    const user = await services.auth.registerUser(req.body);
    return res.send(user);
  } catch (e) {
    console.log(e);
    return res.status(500).send('Server Error');
  }
});

export default router;
