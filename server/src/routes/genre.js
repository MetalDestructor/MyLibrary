import { Router } from 'express';
import services from '../services';

const router = Router();

router.get('/', async (req, res) => {
	try {
		const genres = await services.genre.getAllGenres();
		return res.send(genres);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

router.get('/:genreId', async (req, res) => {
	try {
		const genre = await services.genre.getGenreById(req.params.genreId);
		return res.send(genre);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

router.post('/', async (req, res) => {
	try {
		const genre = await services.genre.createGenre(req.body);
		return res.send(genre);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

router.delete('/:genreId', async (req, res) => {
	try {
		const result = await services.genre.deleteGenre(req.params.genreId);
		res.send(result);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

export default router;
