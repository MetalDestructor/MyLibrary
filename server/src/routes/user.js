import { Router } from 'express';
import services from '../services';

const router = Router();

router.get('/:userId', async (req, res) => {
	try {
		const user = await services.user.getUserById(req.params.userId);
		return res.send(user);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

router.post('/', async (req, res) =>{
	try {
		const user = await services.user.createUser(req.body);
		return res.send(user);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
})

router.post('/login', async (req, res) => {
	try {
		const user = await services.user.loginUser(req.body);
		return res.send(user);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

export default router;
