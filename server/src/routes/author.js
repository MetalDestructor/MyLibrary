import { Router } from 'express';
import services from '../services';

const router = Router();

router.get('/', async (req, res) => {
	try {
		const authors = await services.author.getAllAuthors();
		return res.send(authors);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

router.get('/:authorId', async (req, res) => {
	try {
		const author = await services.author.getAuthorById(req.params.authorId);
		return res.send(author);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

router.post('/', async (req, res) => {
	try {
		const author = await services.author.createAuthor(req.body);
		return res.send(author);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

router.delete('/:authorId', async (req, res) => {
	try {
		const result = await services.author.deleteAuthor(req.params.authorId);
		return res.send(result);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

export default router;
